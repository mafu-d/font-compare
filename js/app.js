var app = new Vue({
    el: '#app',
    data: function() {
        return {
            sample: 'The quick brown fox jumps over the lazy dog.',
            sampleDisplay: 'The quick brown fox jumps over the lazy dog.',
            size: 40,
            comparisons: 2,
            items: [
                { font: 'Arial' },
                { font: 'Helvetica Neue LT Std' }
            ],
            split: -1,
            splitLetter: '',
            overlay: false
        };
    },
    watch: {
        comparisons: function() {
            if (this.comparisons < this.items.length) {
                this.items = this.items.slice(0, this.comparisons);
            }
            if (this.comparisons > this.items.length) {
                this.items.push({
                    font: 'serif'
                });
            }
        },
        split: function() {
            if (this.split === -1) {
                this.sampleDisplay = this.sample;
                this.splitLetter = '';
            }
            else {
                this.splitLetter = this.sample.slice(this.split, this.split + 1);
                this.sampleDisplay = this.sample.slice(0, this.split) + '<span>' + this.splitLetter + '</span>' + this.sample.slice(this.split + 1);
            }
        }
    },
    methods: {
        checkFontExists: function(font) {
            if (!checkfont(font)) {
                WebFont.load({
                    google: {
                        families: [font]
                    }
                });
            }
        }
    }
});
