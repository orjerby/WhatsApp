export const SEND_MSG = "SEND_MSG";

export function sendMsg(contactID, content, date, myMsg) {
    return {
        type: SEND_MSG,
        payload: {contactID, content, date, myMsg}
    };
}