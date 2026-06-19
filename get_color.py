import sys
from PIL import Image

def get_dominant_color(image_path):
    img = Image.open(image_path)
    img = img.convert('RGB')
    
    # Resize to 1x1 to get the average color
    img = img.resize((1, 1))
    color = img.getpixel((0, 0))
    
    return '#{:02x}{:02x}{:02x}'.format(*color)

print(get_dominant_color('/home/olugbenga-mayowa/.gemini/antigravity/brain/014c10ca-e10e-440c-9e53-c81f73d0a3bf/uploaded_media_1781781583737.img'))
