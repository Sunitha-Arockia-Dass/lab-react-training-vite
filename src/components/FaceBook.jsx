import profiles from "../data/berlin.json";
import { useState } from "react";

function FaceBook() {
  const [details, setDetails] = useState(profiles);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const uniqueCountries = Array.from(
    new Set(details.map((detail) => detail.country))
  );

  function handleCountryFilter(country) {
    setSelectedCountry(country);
  }

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile === selectedProfile ? null : profile);
  };
  return (
    <div>
      <div className="country-buttons">
        {uniqueCountries.map((country, index) => (
          <button
            style={{
              backgroundColor: selectedCountry === country ? "aqua" : "initial",
            }}
            key={index}
            onClick={() => handleCountryFilter(country)}
          >
            {country}
          </button>
        ))}
      </div>
      {details.map((detail, index) => {
        return (
          <div
            key={index}
            className={`profile-card ${
              selectedCountry === detail.country ? "selected" : ""
            }`}
          >
            <div className="facebook-card-img">
              <img
                src={detail.img}
                onClick={() => handleProfileClick(detail)}
                alt="error"
              />
            </div>
            {selectedProfile === detail && (
              <div className="facebook-card-content">
                <p>
                  <strong>FirstName:</strong>
                  {detail.firstName}
                </p>
                <p>
                  <strong>LastName:</strong>
                  {detail.lastName}
                </p>
                <p>
                  <strong>Country:</strong>
                  {detail.country}
                </p>
                {detail.isStudent ? (
                  <p>
                    <strong>Type:</strong>
                    Student
                  </p>
                ) : (
                  <p>
                    <strong>Type:</strong>
                    Teacher
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
