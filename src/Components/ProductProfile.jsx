import { useState } from "react";
import { useEffect } from "react";

const ProductProfile = () => {
    const [data,setData] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:8081/user')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    },[])
    return (
        <>
            <table>
                <thead>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                </thead>
                <tbody>
                    {data.map((d,i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <img src="tyre.png"></img>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ProductProfile;