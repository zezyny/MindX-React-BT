import React, { useState } from 'react'
import data from './data'
import "./style.css"
export default function Homepage() {
    const [cart, setCart] = useState([])
    const renderSeat = () => {
        return data.map((item) => {
            if (item.hang != "") {
                let hangGhe = item.danhSachGhe.map((it) => {
                    return <button disabled={it.daDat == true ? true : false} name={it.soGhe} onClick={handleChange} key={it.soGhe} id={it.daDat == true ? 'da-dat' : 'chua-dat'}>
                        {it.soGhe}
                    </button>
                })
                return <div key={item.hang}>
                    <button disabled>
                        {item.hang}
                    </button>
                    {hangGhe}
                </div>
            }
        })
    }

    const handleChange = (event) => {
        if (cart.find(it => it.soGhe == event.target.name) == undefined) {
            let temp
            for (let i = 0; i < data.length; i++) {
                data[i].danhSachGhe.find((item) => {
                    item.soGhe == event.target.name
                    return temp = item
                })
            }
            let newCart = [...cart]
            newCart.push({
                soGhe: event.target.name,
                gia: temp.gia,
                pick: true
            })
            setCart(newCart)
        }

    }
    const delCart = () => {

    }

    const renderCart = () => {
        return cart.map((item) => {
            return <tr key={item.soGhe}>
                <td>
                    {item.soGhe}
                </td>
                <td>
                    {item.gia}
                </td>
                <td>
                    <button name={item.soGhe}>Hủy</button>
                </td>
            </tr>
        })
    }
    const totalCart = () => {
        let total = 0
        cart.forEach(item => total = total + item.gia)
        return <td colSpan={2}>
            {total}
        </td>
    }
    return (
        <div className='content'>
            <div className="hang">
                {renderSeat()}
            </div>
            <div className='order'>
                <table>
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCart()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Thành tiền</td>
                            {totalCart()}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div >
    )
}
