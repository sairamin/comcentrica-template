const createModules = () => {
  return {
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["+"],
      source: function (searchTerm, renderList) {
        const matchedPeople = [
            {
              id: 'firstName',
              value: "Patient First Name",
            },
            {
              id: 'lastName',
              value: "Patient Last Name",
            },
          ];
        renderList(matchedPeople);
      },
    },
  };
};

export { createModules };
