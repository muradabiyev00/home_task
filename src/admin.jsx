import React from 'react'
import { Link } from 'react-router-dom'

export const Admin = () => {
    return (
       <>
       <div>
        <table border={2}>
            <tr>
                <th>Id</th>
                <th>File</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>1</td>
                <td><img className='img' src="https://preview.colorlib.com/theme/tasty/images/dish-3.jpg.webp" alt="" /></td>
                <td>Grilled Beef with potatoes</td>
                <td>Meat,Potatoes,Rice,Tomatoe</td>
                <td>50</td>
                <td><button className='btn1'>Delete</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td><img className='img' src="https://preview.colorlib.com/theme/tasty/images/dish-3.jpg.webp" alt="" /></td>
                <td>Fruit Vanillia</td>
                <td>Meat,Potatoes,Rice,Tomatoe</td>
                <td>80</td>
                <td><button className='btn1'>Delete</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td><img className='img' src="https://preview.colorlib.com/theme/tasty/images/dish-3.jpg.webp" alt="" /></td>
                <td>Grilled Beef with potatoes</td>
                <td>Meat,Potatoes,Rice,Tomatoe</td>
                <td>70</td>
                <td><button className='btn1'>Delete</button></td>
            </tr> <tr>
                <td>4</td>
                <td><img className='img' src="https://preview.colorlib.com/theme/tasty/images/dish-3.jpg.webp" alt="" /></td>
                <td>Grilled Beef with potatoes</td>
                <td>Meat,Potatoes,Rice,Tomatoe</td>
                <td>50</td>
                <td><button className='btn1'>Delete</button></td>
            </tr> <tr>
                <td>5</td>
                <td><img className='img' src="https://preview.colorlib.com/theme/tasty/images/dish-3.jpg.webp" alt="" /></td>
                <td>Grilled Beef with potatoes</td>
                <td>Meat,Potatoes,Rice,Tomatoe</td>
                <td>60</td>
                <td><button className='btn1'>Delete</button></td>
            </tr>
        </table>
       </div>
       </>
    )
}
