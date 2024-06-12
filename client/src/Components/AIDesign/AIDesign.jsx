import React, { useState } from "react";
import "./AIDesign.css";

const AIDesign = () => {
    const [input, setInput] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `https://api.limewire.com/api/image/generation`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Version': 'v1',
                        Accept: 'application/json',
                        Authorization: 'Bearer lmwr_sk_2nLFKzISos_6kpbbXYMZoxVjZCl6VONlyqPEjqrKOj0UlHDp'
                    },
                    body: JSON.stringify({
                        prompt: 'A cute baby sea otter',
                        aspect_ratio: '1:1'
                    })
                }
            );

            const data = await response.json();
            console.log(data);
            setImage(data.self);
        } catch (error) {
            if (error.response && error.response.status === 429) {
                const retryAfter = error.response.headers['retry-after'];
                setTimeout(() => handleSubmit(event), retryAfter * 1000);
            } else {
                console.error("Error fetching AI image", error);
            }
        }
    };

    return (
        <div className="ai-design">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Enter design parameters"
                />
                <button type="submit">Generate Design</button>
            </form>
            {image && <img src={image} alt="AI generated design" />}
        </div>
    );
};

export default AIDesign;