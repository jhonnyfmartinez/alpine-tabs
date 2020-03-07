function tabs() {
  return {
    current: 'Colors',
    items: ['Colors', 'Quotes', 'About'],
    changeTab(tab) {
      this.current = tab;
    }
  };
}

function colors() {
  return {
    list: [
      { hex: '#2DCC72', name: 'green' },
      { hex: '#D64A4B', name: 'red' },
      { hex: '#8E46AC', name: 'purple' },
      { hex: '#3A87BB', name: 'blue' },
      { hex: '#BFC4C8', name: 'gray' }
    ],
    selected: 'blue',
    changeColor(name) {
      this.selected = name;
    },
    getCurrentColor() {
      return this.list.find(c => c.name === this.selected);
    }
  };
}

function quotes() {
  return {
    quote: {},
    error: null,
    loading: false,
    async fetchQuote() {
      const apiUrl = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
      this.loading = true;
      try {
        const result = await fetch(apiUrl);
        const [quote] = await result.json();
        this.quote = quote;
      } catch (error) {
        this.error = 'Oops. Something went wrong.';
      }
      this.loading = false;
    }
  };
}
