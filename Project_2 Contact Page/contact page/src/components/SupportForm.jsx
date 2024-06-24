import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const SupportForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [text, setText] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="support-container">
      <div>
        <div className="support-form-container">
          <button>
            <MdMessage /> VIA SUPPORT CHAT
          </button>

          <button>
            <FaPhoneAlt /> VIA CALL
          </button>
        </div>

        <button className="email-button">
          <MdMessage />
          VIA EMAIL FORM
        </button>
        <div>
          <div>
            <p>NAME</p>
            <input type="text" onChange={handleNameChange} />
          </div>

          <div>
            <p>EMAIL</p>
            <input type="text" onChange={handleEmailChange} />
          </div>

          <div>
            <p>TEXT</p>
            <textarea
              rows="10"
              cols="55"
              onChange={handleTextChange}
            ></textarea>
          </div>
        </div>
        <div>
          <button>SUBMIT</button>
        </div>
      </div>

      <img
        className="service-image"
        src="Images/Service 24_7-pana 1.svg"
        alt="service-image"
      />
    </div>
  );
};

export default SupportForm;
