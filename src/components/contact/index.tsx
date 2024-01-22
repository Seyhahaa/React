import React from "react";
import "./style.css";

interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="contact">
      <h1 className="title">Contact</h1>
      <p className="desc">
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="address">
        Catering Service, 42nd Living St, 43043 New York, NY
      </p>
      <p className="desc">
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>
      <form action="">
        <div className="form-group">
            <input type="text" className="form-control" 
            placeholder="Name" required />
        </div>
        <div className="form-group">
            <input type="number" className="form-control" 
            placeholder="How many people" required />
        </div>
        <div className="form-group">
            <input type="datetime-local" className="form-control" />
        </div>
        <div className="form-group">
            <input type="text" className="form-control" 
            placeholder="Message \ Special requirements"/>
        </div>
        <input type="submit" className="btnsubmit" value={"SEND MESSAGE"} />
      </form>
    </div>
  );
};
export default Contact;
