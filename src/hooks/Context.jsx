import { createContext } from "react";

export const FunctionContext = createContext()
const Context = ({ children }) => {

    // scroll by id function
    const scrollToElement = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const value = {
        scrollToElement
    }
    return (
        <FunctionContext.Provider value={value}>
            {children}
        </FunctionContext.Provider>
    );
};

export default Context;