import ReactGA from 'react-ga4';

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-F0RP7LW10D'; // You need to replace this with your actual ID

class Analytics {
  static initialize() {
    if (!GA_MEASUREMENT_ID) {
      console.warn('Google Analytics Measurement ID not configured');
      return;
    }

    try {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        testMode: true,
        gtagOptions: {
          send_page_view: false // We'll send page views manually
        }
      });
      console.log('Google Analytics initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Google Analytics:', error);
    }
  }

  static trackPageView(path, title) {
    console.log('Tracking page view:', path, title);
    try {
      ReactGA.send({
        hitType: 'pageview',
        page: path || window.location.pathname,
        title: title || document.title
      });
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  static trackEvent(eventData) {
    console.log('Tracking event:', eventData);
    try {
      ReactGA.event(eventData);
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  }

  // Specific method for tracking resume downloads
  static trackResumeDownload(fileName = 'resume.pdf') {
    this.trackEvent({
      category: 'File Download',
      action: 'Resume Download',
      label: fileName,
      value: 1
    });
  }

  // Track button clicks
  static trackButtonClick(buttonName, location) {
    console.log('Tracking button click:', buttonName, location);
    this.trackEvent({
      category: 'User Interaction',
      action: 'Button Click',
      label: `${buttonName} - ${location}`
    });
  }

  // Track form submissions or contact attempts
  static trackContactAttempt(method = 'email') {
    this.trackEvent({
      category: 'Contact',
      action: 'Contact Attempt',
      label: method
    });
  }

  // Track external link clicks
  static trackExternalLink(url, linkText) {
    this.trackEvent({
      category: 'External Link',
      action: 'Click',
      label: `${linkText} - ${url}`
    });
  }
}

export default Analytics;