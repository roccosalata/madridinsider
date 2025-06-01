
import React from 'react';
import { PostAndMail } from '../data/essentialsData';

interface PostAndMailInfoProps {
  info: PostAndMail;
}

const PostAndMailInfo: React.FC<PostAndMailInfoProps> = ({ info }) => {
  return (
    <div>
      {/* Main Branch */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Main Branch</h2>
        <p><strong>Name:</strong> {info.mainBranch.name}</p>
        <p><strong>Location:</strong> {info.mainBranch.location}</p>
        <p><strong>General Delivery Hours:</strong> {info.mainBranch.generalHours}</p>
        <p><strong>Stamps & General Services Hours:</strong> {info.mainBranch.stampHours}</p>
        <p><strong>Phone:</strong> {info.mainBranch.phone}</p>
      </section>

      {/* Picking Up Mail */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Picking Up Mail</h2>
        <p>{info.pickingUpMail.instructions}</p>
        <p><strong>Required Document:</strong> {info.pickingUpMail.requiredDocument}</p>
        <p><strong>General Delivery Address:</strong></p>
        <p>{info.generalDeliveryAddress.namePlaceholder}</p>
        <p>{info.generalDeliveryAddress.addressLine1}</p>
        <p>{info.generalDeliveryAddress.addressLine2}</p>
      </section>

      {/* Mailboxes */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mailboxes</h2>
        <p>{info.mailboxes.description}</p>
      </section>

      {/* Stamps */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Stamps</h2>
        <p>{info.stamps.purchaseLocations}</p>
        <p>{info.stamps.notes}</p>
        {info.stamps.websites && info.stamps.websites.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mt-2 mb-1">Relevant Websites:</h3>
            <ul>
              {info.stamps.websites.map((website, index) => (
                <li key={index}>
                  <a href={website.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{website.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Mailing Rates */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mailing Rates</h2>
        <p>{info.mailingRates.notes}</p>
        <ul>
          {info.mailingRates.rates.map((rate, index) => (
            <li key={index}>
              <strong>{rate.destination}:</strong> {rate.cost}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PostAndMailInfo;
