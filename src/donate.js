import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Donate = () => {
    const [showThanks, setShowThanks] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        amount: ""
    });
    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDonate = (event) => {
        event.preventDefault();
        if (formData.name.trim() !== "" && formData.email.trim() !== "" && formData.amount.trim() !== "") {
            setShowThanks(true);
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="sections-contact">
            <div className="contact-form">
                {!showThanks ? (
                    <>
                        <h2>Donate to a child</h2>
                        <form name="myform"  onSubmit={handleDonate} >
                            <div className="form-group">
                                <label htmlFor="Name">Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Amount">Amount:</label>
                                <input type="number" id="amount" name="amount" placeholder="Amount in (£)pounds" value={formData.amount} onChange={handleInputChange} />
                            </div>
                            
                            <div className="form-group">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </>
                ) : (
                    <div>
                        <h2>Thank you for donating!</h2>
                        <p>We appreciate your generosity. Your donation will make a difference in a child's life.</p>
                        <button onClick={() => history.push("/")}>Go back to homepage</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Donate;
