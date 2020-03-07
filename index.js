function tabs() {
  return {
    current: 'Colors',
    list: ['Colors', 'Movies', 'About'],
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
