import re

with open('/tmp/old_index.html', 'r') as f:
    old_content = f.read()

with open('index.html', 'r') as f:
    new_content = f.read()

# Extract About Section
about_match = re.search(r'(<!-- About Section -->.*?</section>)', old_content, re.DOTALL)
about_section = about_match.group(1) if about_match else ''

# Extract Skills Section
skills_match = re.search(r'(<!-- Skills Section -->.*?</section>)', old_content, re.DOTALL)
skills_section = skills_match.group(1) if skills_match else ''

# Extract Linguistics Section
linguistics_match = re.search(r'(<!-- Linguistics Dedicated Section -->.*?</section>)', old_content, re.DOTALL)
linguistics_section = linguistics_match.group(1) if linguistics_match else ''

# Ensure safe layout classes for the restored sections
about_section = about_section.replace('class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"', 'class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"')
skills_section = skills_section.replace('class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"', 'class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"')
linguistics_section = linguistics_section.replace('class="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10"', 'class="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 w-full"')
linguistics_section = linguistics_section.replace('animate-antigravity', 'animate-float')
skills_section = skills_section.replace('animate-antigravity', 'animate-float')


# Insert About before Projects
new_content = new_content.replace('<!-- Projects Grid Section (Bento Grid) -->', about_section + '\n\n        <!-- Projects Grid Section (Bento Grid) -->')

# Insert Skills and Linguistics before Contact
new_content = new_content.replace('<!-- Contact Section -->', skills_section + '\n\n        ' + linguistics_section + '\n\n        <!-- Contact Section -->')

with open('index.html', 'w') as f:
    f.write(new_content)

print("Patch applied successfully.")
