import emailjs from "emailjs-com"

export function* workerSendEmail(action) {
    try {
        const response = yield emailjs.send("service_5qmcp2a", "template_nqxdqyr", {
            to_name: action.to_name,
            to_email: action.to_email,
        }, "user_VkXBIJtHa6ofwOroZ931p");
        yield console.log(response);

    } catch (error) {
        console.log(error);
    }


}