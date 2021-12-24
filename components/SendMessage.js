import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {
    const { user, Moralis } = useMoralis();
    const [ message, setMessage ] = useState("");
    
    const sendMessage = (event) => {
        event.preventDefault();

        if(!message) return;

        // Send to moralis data base - an offchain storage
        // Create Moralis object - i.e. a table in the database
        const Messages = Moralis.Object.extend("Messages");
        // Create an instance of the Messages Object
        const messages = new Messages();

        //save into the database and use etherium address as this wouldnt change for a user, 
        // whereas the username can change as we made it customisable!
        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress")
        }).then(
            (message) => {
                //Message saved successfuly
            }, 
            (error) => {
                // Save failed
                console.log(error.message);
            }
        );

        // After sending a message - move the up-to-date message back into view! 😀
        endOfMessagesRef.current.scrollIntoView({ behaviour: "smooth" });

        setMessage("");
    };

    return (
        <form 
            className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400"
        >
            <input 
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500" type="text"
                placeholder={"Enter a message " + user.getUsername() + " ..."}   
                value={message}
                onChange={(event) => setMessage(event.target.value)} 
            />
            <button 
                className="font bold text-green-500"
                onClick={sendMessage}
                className="font-bold text-green-500 pr-5"
            >
                Send
            </button>
        </form>
    )
}

export default SendMessage;