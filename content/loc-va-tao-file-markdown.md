import os
from urllib.parse import urlparse

# Danh sách các URL
urls = [
    "https://bocgheoto.vn/dich-vu/boc-ghe-da-o-to-tai-ha-noi.html/",
    "https://bocgheoto.vn/dich-vu/mau-ghe-da-xe-oto-dep.html/",
    "https://bocgheoto.vn/dich-vu/boc-vo-lang.html/",
    "https://bocgheoto.vn/dich-vu/boc-ghe-da-cong-nghiep-loai-1.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-navara.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-ertiga.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-swift.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-celerio.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-hilux.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-camry.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-yaris.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-altis.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-fortuner.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-innova.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-wigo.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-toyota-rush.html/",
    "https://bocgheoto.vn/mazda/boc-ghe-da-xe-mazda-bt50.html/",
    "https://bocgheoto.vn/mazda/boc-ghe-da-xe-mazda-cx5.html/", 
    "https://bocgheoto.vn/mazda/boc-ghe-da-xe-mazda-6.html/",
    "https://bocgheoto.vn/mazda/boc-ghe-da-xe-mazda-3.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-grandis.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-triton.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-mirage.html/", 
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-attrage.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-mitsubishi-pajero.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-outlander.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-jolie.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-xpander.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-kia-carens.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-kia-forte.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-cerato.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-morning.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-kia-rio.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-kia-sorento.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-tucson.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-santafe.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-i10.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-i20.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-accent.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-avante.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-elantra.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-getz.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-starex.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-transit.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-ranger.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-ecosport.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-focus.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-fiesta.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-everest.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-civic.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-crv.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-city.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-jazz.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-hrv.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-vios.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-colorado.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-captiva.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-orlando.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-spark.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-aveo.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-cruze.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-escape.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-almera.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-kicks.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-sunny.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-honda-brio.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-kona.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-x-trail.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-ciaz.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-vitara.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-xl7.html/"
]

# Tạo thư mục gốc
root_dir = "bocgheoto"
if not os.path.exists(root_dir):
    os.makedirs(root_dir)

# Xử lý từng URL
for url in urls:
    # Parse URL để lấy path
    parsed_url = urlparse(url)
    path_parts = parsed_url.path.strip('/').split('/')
    
    if len(path_parts) >= 2:
        # Lấy tên thư mục (category)
        category = path_parts[0]
        # Lấy tên file (không bao gồm .html/) và thêm .md
        filename = path_parts[1].replace('.html/', '.html/.md')
        
        # Tạo đường dẫn đầy đủ cho thư mục category
        category_path = os.path.join(root_dir, category)
        
        # Tạo thư mục category nếu chưa tồn tại
        if not os.path.exists(category_path):
            os.makedirs(category_path)
            
        # Tạo file markdown trống
        file_path = os.path.join(category_path, filename)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('')

print("Đã tạo xong cấu trúc thư mục và file!")

Tôi sẽ giúp bạn tổ chức các đường link thành cấu trúc thư mục. Dưới đây là code Python để tạo cấu trúc thư mục và file như bạn yêu cầu:



 python
import os
from urllib.parse import urlparse

# Danh sách các URL
urls = [
    "https://bocgheoto.vn/dich-vu/boc-ghe-da-o-to-tai-ha-noi.html/",
    "https://bocgheoto.vn/dich-vu/mau-ghe-da-xe-oto-dep.html/",
    "https://bocgheoto.vn/dich-vu/boc-vo-lang.html/",
    "https://bocgheoto.vn/dich-vu/boc-ghe-da-cong-nghiep-loai-1.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-navara.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-ertiga.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-swift.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-celerio.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-hilux.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-camry.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-yaris.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-altis.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-fortuner.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-innova.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-wigo.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-toyota-rush.html/",
    "https://bocgheoto.vn/mazda/boc-ghe-da-xe-mazda-bt50.html/",
    "https://bocgheoto.vn/mazda/boc-ghe-da-xe-mazda-cx5.html/", 
    "https://bocgheoto.vn/mazda/boc-ghe-da-xe-mazda-6.html/",
    "https://bocgheoto.vn/mazda/boc-ghe-da-xe-mazda-3.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-grandis.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-triton.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-mirage.html/", 
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-attrage.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-mitsubishi-pajero.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-outlander.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-jolie.html/",
    "https://bocgheoto.vn/mitsubishi/boc-ghe-da-xe-xpander.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-kia-carens.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-kia-forte.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-cerato.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-morning.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-kia-rio.html/",
    "https://bocgheoto.vn/kia/boc-ghe-da-xe-kia-sorento.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-tucson.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-santafe.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-i10.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-i20.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-accent.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-avante.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-elantra.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-getz.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-starex.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-transit.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-ranger.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-ecosport.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-focus.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-fiesta.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-everest.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-civic.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-crv.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-city.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-jazz.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-xe-honda-hrv.html/",
    "https://bocgheoto.vn/toyota/boc-ghe-da-xe-vios.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-colorado.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-captiva.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-orlando.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-spark.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-aveo.html/",
    "https://bocgheoto.vn/chvrolet/boc-ghe-da-xe-cruze.html/",
    "https://bocgheoto.vn/ford/boc-ghe-da-xe-ford-escape.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-almera.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-kicks.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-sunny.html/",
    "https://bocgheoto.vn/honda/boc-ghe-da-honda-brio.html/",
    "https://bocgheoto.vn/hyundai/boc-ghe-da-xe-kona.html/",
    "https://bocgheoto.vn/nissan/boc-ghe-da-xe-x-trail.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-ciaz.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-vitara.html/",
    "https://bocgheoto.vn/suzuki/boc-ghe-da-xe-xl7.html/"
]

# Tạo thư mục gốc
root_dir = "bocgheoto"
if not os.path.exists(root_dir):
    os.makedirs(root_dir)

# Xử lý từng URL
for url in urls:
    # Parse URL để lấy path
    parsed_url = urlparse(url)
    path_parts = parsed_url.path.strip('/').split('/')
    
    if len(path_parts) >= 2:
        # Lấy tên thư mục (category)
        category = path_parts[0]
        # Lấy tên file (không bao gồm .html/) và thêm .md
        filename = path_parts[1].replace('.html/', '.html/.md')
        
        # Tạo đường dẫn đầy đủ cho thư mục category
        category_path = os.path.join(root_dir, category)
        
        # Tạo thư mục category nếu chưa tồn tại
        if not os.path.exists(category_path):
            os.makedirs(category_path)
            
        # Tạo file markdown trống
        file_path = os.path.join(category_path, filename)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('')

print("Đã tạo xong cấu trúc thư mục và file!")

 

Script này sẽ:

1. Tạo một thư mục gốc tên là "bocgheoto"
2. Tạo các thư mục con dựa theo danh mục (category) từ URL như:
   - dich-vu
   - nissan
   - suzuki
   - toyota
   - mazda
   - mitsubishi
   - kia
   - hyundai
   - ford
   - honda
   - chvrolet

3. Trong mỗi thư mục danh mục, tạo các file .md tương ứng với tên của URL

Cấu trúc thư mục sẽ như sau:
 
bocgheoto/
├── dich-vu/
│   ├── boc-ghe-da-o-to-tai-ha-noi.html/.md
│   ├── mau-ghe-da-xe-oto-dep.html/.md
│   └── ...
├── nissan/
│   ├── boc-ghe-da-xe-navara.html/.md
│   └── ...
├── suzuki/
│   ├── boc-ghe-da-xe-ertiga.html/.md
│   └── ...
└── ...
 

Để sử dụng script này:
1. Lưu mã nguồn vào một file Python (ví dụ: `create_folders.py`)
2. Chạy script bằng lệnh: `python create_folders.py`
3. Script sẽ tự động tạo cấu trúc thư mục và file như mong muốn

Bạn có muốn tôi thêm bất kỳ tính năng nào khác không?