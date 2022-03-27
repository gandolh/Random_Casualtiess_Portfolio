import os
def replace(folder_path):
    for (path, dirs, files) in os.walk(folder_path):
        dst = path.replace(" ", "_")
        os.rename(path, dst)

replace('D:\projects\Random_Casualtiess_Portfolio\public\GenerativeArt')