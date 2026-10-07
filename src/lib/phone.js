export const toTelHref = (number) => `tel:+353${number.replace(/\s/g, "").replace(/^0/, "")}`;
