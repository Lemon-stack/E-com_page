// whatsappUtils.js

const handleEnquiry = (phoneNumber, productName, productPrice) => {
  const message = `I'm interested in the product:\n\nName: ${productName}\nPrice: NGN ${productPrice}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export default handleEnquiry;
