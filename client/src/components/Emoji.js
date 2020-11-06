import React, { useState } from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';


export default function Emoji() {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    return (
        <div>
            <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} skinTone={SKIN_TONE_MEDIUM_DARK} groupNames={{ smileys_people: "PEOPLE" }} />
            { chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
        </div>
    );
};

const EmojiData = ({ chosenEmoji }) => (
    <div>
        <strong>Symbol:</strong> {chosenEmoji.emoji}<br />
    </div>
);
