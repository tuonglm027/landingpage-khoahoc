import TagManager from 'react-gtm-module'

// GTM Events
export const trackEvent = (eventName, parameters = {}) => {
    TagManager.dataLayer({
        dataLayer: {
            event: eventName,
            ...parameters
        }
    })
}

// Page View Tracking
export const trackPageView = (pageName) => {
    TagManager.dataLayer({
        dataLayer: {
            event: 'page_view',
            page_path: window.location.pathname,
            page_title: pageName || document.title
        }
    })
}

// E-commerce Events
export const trackPurchase = (transactionData) => {
    TagManager.dataLayer({
        dataLayer: {
            event: 'purchase',
            ecommerce: {
                transaction_id: transactionData.transactionId,
                value: transactionData.value,
                currency: 'VND',
                items: transactionData.items
            }
        }
    })
}

export const trackBeginCheckout = (value, items) => {
    TagManager.dataLayer({
        dataLayer: {
            event: 'begin_checkout',
            ecommerce: {
                value: value,
                currency: 'VND',
                items: items
            }
        }
    })
}

// Lead Generation
export const trackLead = (leadData) => {
    TagManager.dataLayer({
        dataLayer: {
            event: 'generate_lead',
            lead_type: leadData.type,
            user_data: {
                email: leadData.email,
                phone: leadData.phone,
                name: leadData.name
            }
        }
    })
}

// Button Click Tracking
export const trackButtonClick = (buttonName, location) => {
    TagManager.dataLayer({
        dataLayer: {
            event: 'button_click',
            button_name: buttonName,
            button_location: location
        }
    })
}

// Form Submit Tracking
export const trackFormSubmit = (formName) => {
    TagManager.dataLayer({
        dataLayer: {
            event: 'form_submit',
            form_name: formName
        }
    })
}
