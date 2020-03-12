import * as React from "react";

interface NotificationProps {
    children: React.ReactNode;
    showClose?: boolean;
}

const Notification = ({children, showClose = false}: NotificationProps) => {
    function removeNotification() {
        const notification = document.querySelector(".notification");
        if (notification && notification.parentElement) {
            notification.parentElement.removeChild(notification);
        }
    }

    return (
        <div className="container has-mobile-padding">
            <div className="notification is-info">
                {showClose && <button className="delete" onClick={removeNotification} />}
                {children}
            </div>
        </div>
    )
};

export default Notification;
