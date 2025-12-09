#!/usr/bin/env python3
"""
Process R&G product images with Gemini to create professional product shots
"""

import os
import sys
import glob
from pathlib import Path
from PIL import Image
from google import genai
from google.genai import types

# Setup
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
INPUT_DIR = Path(__file__).parent
OUTPUT_DIR = INPUT_DIR / "processed"
OUTPUT_DIR.mkdir(exist_ok=True)

# Professional product photo prompt
PROMPT = """Transform this product image into a professional, modern product photograph suitable for a tech company website.

Requirements:
- Keep the EXACT same product, do not change it
- Place on clean, modern gradient background (subtle dark gray to charcoal, #1a1a2e to #16213e)
- Add professional studio lighting with soft shadows
- Make the product look premium and high-tech
- Keep the image clean and minimal
- Ensure the product is the clear focus
- Use subtle reflections on the surface beneath
- Resolution should be crisp and clear
- The style should match modern tech/SaaS company aesthetics

The product should look like it belongs on Apple's or a premium electronics company's website."""

def process_image(input_path: Path) -> bool:
    """Process a single image with Gemini."""
    output_path = OUTPUT_DIR / input_path.name

    if output_path.exists():
        print(f"  Skipping {input_path.name} (already processed)")
        return True

    try:
        img = Image.open(input_path)

        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=[PROMPT, img],
            config=types.GenerateContentConfig(
                response_modalities=['IMAGE'],
            )
        )

        for part in response.parts:
            if part.inline_data:
                result_img = part.as_image()
                result_img.save(output_path)
                print(f"  Saved: {output_path.name}")
                return True

        print(f"  Warning: No image in response for {input_path.name}")
        return False

    except Exception as e:
        print(f"  Error processing {input_path.name}: {e}")
        return False

def main():
    # Find all jpg images (excluding processed folder)
    images = [p for p in INPUT_DIR.glob("*.jpg") if p.is_file()]
    images = sorted(images)

    print(f"Found {len(images)} images to process")
    print(f"Output directory: {OUTPUT_DIR}")
    print("-" * 50)

    success = 0
    failed = 0

    for i, img_path in enumerate(images, 1):
        print(f"[{i}/{len(images)}] Processing {img_path.name}...")
        if process_image(img_path):
            success += 1
        else:
            failed += 1

    print("-" * 50)
    print(f"Done! Success: {success}, Failed: {failed}")

if __name__ == "__main__":
    main()
