const ERRORS = {
  required: {
    required: 'Campo obbligatorio',
  },
  title: {
    maxLength: {
      value: 100,
      message: 'Lunghezza massima 100 caratteri',
    },
  },
  description: {
    required: 'Campo obbligatorio',
    maxLength: {
      value: 500,
      message: 'Lunghezza massima 500 caratteri',
    },
  }
};

export default ERRORS;
