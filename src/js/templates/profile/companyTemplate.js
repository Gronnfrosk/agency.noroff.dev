/**
 * Setup function for company render functions.
 * @param {*} data object data from company model
 */
export function companyTemplate(data) {
  const companyListings = document.querySelector('#companyListings');
  // const companyOffers = document.querySelector('#companyOffers');
  const companyApplications = document.querySelector('#companyApplications');

  renderCompanyListings(data, companyListings);
  renderCompanyApplications(data, companyApplications);
}

/**
 * Function for rendering Company Listings
 * @param {object} data object data from company model
 * @param {element} parent element to append the rendered content
 * @returns returns rendered listings from company profile endpoint
 */
export function renderCompanyListings(data, parent) {
  const { listing } = data;

  const listingsContainer = document.createElement('div');

  listing.forEach((listObject) => {
    // const { } = listObject;
    const listing = document.createElement('div');
    const image = document.createElement('img');

    const body = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');

    const details = document.createElement('div');
    const viewButton = document.createElement('button');
    const applicants = document.createElement('p');
    const expires = document.createElement('p');

    // Element classes
    listing.classList.add('d-flex');
    details.classList.add('d-flex');
    body.classList.add('p-2');

    // Appending
    details.append(applicants, expires, viewButton);
    body.append(title, description, details);
    listing.append(image, body);
    listingsContainer.append(listing);

    return listing;
  });

  parent.append(listingsContainer);
  return listingsContainer;
}

/**
 * Function for rendering company applications
 * @param {*} data object data from company model
 * @param {*} parent element to append the rendered content
 * @returns returns rendered applications from company profile endpoint
 */
export function renderCompanyApplications(data, parent) {
  const { applications } = data;

  const applicationsContainer = document.createElement('div');

  applications.forEach((appObject) => {
    // const {} = appObject;
    const applicantDetails = document.createElement('div');
    const position = document.createElement('div');
    const candidate = document.createElement('div');
    const appliedDate = document.createElement('div');
    const viewButton = document.createElement('div');

    // Element classes
    applicantDetails.classList.add('row');
    position.classList.add('col');
    candidate.classList.add('col');
    appliedDate.classList.add('col');
    viewButton.classList.add('btn col');

    // Appending
    applicantDetails.append(position, candidate, appliedDate, viewButton);
    applicationsContainer.append(applicantDetails);

    return applicantDetails;
  });

  parent.append(applicationsContainer);
  return applicationsContainer;
}

// Missing lo-fi of offers sent.
