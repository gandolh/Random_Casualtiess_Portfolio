# this script should be used to rename the static assets to an format that can be used in the web

import os
def replace(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files + dirs:
            # Replace spaces with underscores in the file/directory name
            new_name = file.replace(' ', '_').lower()
            new_name = new_name.replace('_-_', '_')
            
            old_path = os.path.join(root, file)
            new_path = os.path.join(root, new_name)

            os.rename(old_path, new_path)
            # print(f'Renamed: {old_path} -> {new_path}')


if __name__ == "__main__":
    # Specify the folder path here
    folder_path = 'D:\projects\my_github\Random_Casualtiess_Portfolio\public\GenerativeArt'
    replace(folder_path)