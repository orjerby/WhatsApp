import { SEND_MSG } from "../actions";
import update from 'immutability-helper';

const defaultState = [
    { id: 0, name: 'Michal', picture: "/images/pic0.jpg", msgs: [{ content: "Hey, whatsup?!", myMsg: true, date: new Date() }, {content: "Great, you?", myMsg: false, date: new Date()}] },
    { id: 1, name: 'Yochai', picture: "/images/pic1.jpg", msgs: [{ content: "Hello", myMsg: true, date: new Date() }, {content: "Who are you?", myMsg: false, date: new Date()}] },
    { id: 2, name: 'Sharon', picture: "/images/pic2.jpg", msgs: [{ content: "Sharon!", myMsg: true, date: new Date() }, {content: "What?", myMsg: false, date: new Date()}] }
];

export default function (state = defaultState, action) {
    switch (action.type) {
        case SEND_MSG:
            const { payload } = action;

            //  מוצא אינדקס של איש קשר מסויים לפי המספר זהות שלו
            let contactIndex = state.findIndex(contact => contact.id === payload.contactID);
            // מוסיף לאיש קשר הודעה חדשה
            let newState = update(state, {
                [contactIndex]: {
                    msgs: { $push: [{ content: payload.content, myMsg: payload.myMsg, date: payload.date }] }
                }
            });
            return newState;
            break;
    }
    return state;
}