import React from 'react'

const chatBot = () => {
    return (
        <div>
            <ul class="chatbox"></ul>

            <div class="chat-input">
                <textarea placeholder="Enter a message..."></textarea>
                <button id="sendBTN">Send</button>
            </div>

        </div>
    )
}

export default chatBot