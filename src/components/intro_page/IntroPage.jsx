import styles from './IntroPage.module.css'

export default function IntroPage() {

    return (
        <div className={`${styles.introMain}`}>
            <header className={styles.aboutHeader}>
                <div className={styles.introHeader}>
                    <img className={styles.introImgHeader} src='src/assets/img/intro_header.png' />
                    <p className={styles.introHeaderText}>VỀ MSI</p>
                </div>
                <div className={styles.description}>
                    <div className={`${styles.commonContainer} text-center`}>
                        <div className={styles.descriptionTitle}>Tổng quan về công ty</div>
                        <div className={styles.descriptionText}>MSI là công ty hàng đầu thế giới về AI PC, thiết bị chơi game, sáng tạo nội dung, kinh doanh & năng suất cũng như các giải pháp AIoT. Với động lực từ khả năng R&D tiên tiến và sự đổi mới hướng đến khách hàng, MSI đã có mặt rộng khắp trên toàn cầu, trải dài trên 120 quốc gia. Dòng sản phẩm toàn diện bao gồm máy tính xách tay, card đồ họa, màn hình, bo mạch chủ, máy tính để bàn, thiết bị ngoại vi, máy chủ, IPC, thiết bị robot, hệ thống thông tin giải trí và viễn thông trên xe cũng như bộ sạc EV được đánh giá cao trên toàn thế giới. Cam kết nâng cao trải nghiệm người dùng thông qua chất lượng sản phẩm tốt nhất, giao diện người dùng trực quan và thiết kế thẩm mỹ, MSI là thương hiệu hàng đầu định hình tương lai của công nghệ. </div>
                    </div>
                </div>
            </header>
        </div>
    )
}