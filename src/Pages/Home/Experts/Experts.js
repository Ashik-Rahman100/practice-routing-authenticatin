import { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() =>{
        fetch('mechanic.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    },[])
    return (
        <div>
            <h2 className= 'text-secondary my-2'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert 
                        key={expert.id}
                        expert = {expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;