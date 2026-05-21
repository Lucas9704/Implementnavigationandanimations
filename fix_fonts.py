import os
import re

replacements = {
    r"font-\['Groteska:Bold',sans-serif\]": "font-groteska-bold",
    r"font-\['Groteska:Medium',sans-serif\]": "font-groteska-medium",
    r"font-\['Montserrat:Regular',sans-serif\]": "font-montserrat",
    r"font-\['Montserrat:Medium',sans-serif\]": "font-montserrat-medium",
    r"font-\['Montserrat:SemiBold',sans-serif\]": "font-montserrat-semibold",
    r"font-\['Montserrat:Bold',sans-serif\]": "font-montserrat-bold",
    r"font-\['Helony:Regular',sans-serif\]": "font-helony",
    r"font-\['DM_Sans:Regular',sans-serif\]": "font-dm-sans",
    r"font-\['DM_Sans:Bold',sans-serif\]": "font-dm-sans-bold",
    r"font-\['DM_Sans:ExtraLight',sans-serif\]": "font-dm-sans-extralight",
    r"font-\['DM_Sans:Black',sans-serif\]": "font-dm-sans-black",
    r"font-\['Montserrat_Alternates',sans-serif\]": "font-montserrat-alternates"
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements.items():
        new_content = re.sub(old, new, new_content)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
            process_file(os.path.join(root, file))

print("Done")