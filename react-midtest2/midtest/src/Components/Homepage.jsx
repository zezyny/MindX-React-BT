import React, { useState } from 'react'
import "./style.css"
import Navbar from './Navbar'
import Carousel from './Carousel'
import NewRelease from './NewRelease'
import { data } from './data.json';
export default function Homepage() {
    const [carousel, setCarousel] = useState({
        "id": "1",
        "movieName": "Weather With You",
        "description": "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
        "image": "src/assets/spyxfamily.jpg",
        "episode": "01"
    })
    const handleClick = (event) => {
        let temp = data.find((item) => {
            return item.id == event.target.name
        })
        setCarousel(temp)
    }
    return (
        <div>
            <Navbar />
            <Carousel item={carousel} />
            <NewRelease click={handleClick} />
        </div>
    )
}
