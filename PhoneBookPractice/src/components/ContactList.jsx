import React from "react";
import usePhoneBookInfo from "../Stores/usePhoneBookInfo";
import useSearchStore from "../Stores/useSearchStore";

const ContactList = () => {
  const { phoneBook } = usePhoneBookInfo();
  console.log(phoneBook);

  const { keyword } = useSearchStore();
  const filteredList = phoneBook.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div>
      {filteredList.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
