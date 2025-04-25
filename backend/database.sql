-- Database: mk_web
CREATE DATABASE IF NOT EXISTS mk_web CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

USE mk_web;

-- Users table
CREATE TABLE
    IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100),
        region VARCHAR(50) NOT NULL,
        birthdate DATE NOT NULL,
        phone VARCHAR(20),
        role ENUM ('user', 'admin') DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

INSERT INTO users (email, password, first_name, last_name, region, birthdate, phone, role)
VALUES
('admin1@example.com', '$2y$10$uwXsIlpTfcwUKNCOEmOBuO550UEFkGZ9cDcT5gx1r1cTAnvlo1Hti', 'Admin', 'One', 'VN', '1990-01-01', '0901111111', 'admin'),
('admin2@example.com', '$2y$10$uwXsIlpTfcwUKNCOEmOBuO550UEFkGZ9cDcT5gx1r1cTAnvlo1Hti', 'Admin', 'Two', 'VN', '1985-05-15', '0902222222', 'admin'),
('admin3@example.com', '$2y$10$uwXsIlpTfcwUKNCOEmOBuO550UEFkGZ9cDcT5gx1r1cTAnvlo1Hti', 'Admin', 'Three', 'VN', '1992-07-21', '0903333333', 'admin');


-- Intro page content table
CREATE TABLE
    IF NOT EXISTS intro_content (
        id INT AUTO_INCREMENT PRIMARY KEY,
        section_key VARCHAR(50) NOT NULL UNIQUE,
        title VARCHAR(255),
        content TEXT,
        image_path VARCHAR(255),
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        updated_by INT,
        FOREIGN KEY (updated_by) REFERENCES users (id)
    );

-- Insert default content
INSERT INTO intro_content (section_key, title, content, image_path)
VALUES
    (
        'company_overview',
        'Tổng quan về công ty',
        'MK là công ty hàng đầu thế giới về AI PC, thiết bị chơi game, sáng tạo nội dung, kinh doanh & năng suất cũng như các giải pháp AIoT. Với động lực từ khả năng R&D tiên tiến và sự đổi mới hướng đến khách hàng, MK đã có mặt rộng khắp trên toàn cầu, trải dài trên 120 quốc gia. Dòng sản phẩm toàn diện bao gồm máy tính xách tay, card đồ họa, màn hình, bo mạch chủ, máy tính để bàn, thiết bị ngoại vi, máy chủ, IPC, thiết bị robot, hệ thống thông tin giải trí và viễn thông trên xe cũng như bộ sạc EV được đánh giá cao trên toàn thế giới. Cam kết nâng cao trải nghiệm người dùng thông qua chất lượng sản phẩm tốt nhất, giao diện người dùng trực quan và thiết kế thẩm mỹ, MK là thương hiệu hàng đầu định hình tương lai của công nghệ.',
        NULL
    ),
    (
        'about_us',
        'Về chúng tôi',
        'MK là thương hiệu hàng đầu trong lĩnh vực sản phẩm chơi game và sáng tạo, không ngừng đổi mới để mang đến những trải nghiệm vượt trội cho người dùng trên toàn thế giới.',
        'assets/img/Intro/banner-about-index-aboutus.jpg'
    ),
    (
        'one_step_service',
        'Dịch vụ MỘT CHẠM',
        'Chúng tôi cung cấp hệ thống dịch vụ tùy biến, đáp ứng mọi nhu cầu của khách hàng, đảm bảo sự tiện lợi và hiệu quả tối đa trong quá trình sử dụng sản phẩm MK.',
        'assets/img/Intro/banner-about-index-one-step-service.jpg'
    ),
    (
        'sustainability',
        'Bền vững',
        'MK cam kết bảo vệ môi trường, nâng cao an toàn sức khỏe và thực hiện trách nhiệm xã hội, hướng đến sự phát triển bền vững cho cộng đồng và thế hệ tương lai.',
        'assets/img/Intro/banner-about-index-sustainability.jpg'
    ),
    (
        'contact_us',
        'Contact Us',
        'Cảm ơn bạn đã ủng hộ sản phẩm MK. Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua trang Dịch vụ khách hàng trực tuyến. Chúng tôi sẽ phản hồi nhanh nhất có thể.',
        'assets/img/Intro/banner-about-index-contact-xs.jpg'
    );