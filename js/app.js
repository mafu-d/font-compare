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
            overlay: false,
            fonts: {
                'WebSafe': [
                    'Arial',
                    'Arial Black',
                    'Arial Narrow',
                    'Arial Rounded MT Bold',
                    'Avant Garde',
                    'Calibri',
                    'Candara',
                    'Century Gothic',
                    'Franklin Gothic Medium',
                    'Futura',
                    'Geneva',
                    'Gill Sans',
                    'Helvetica',
                    'Impact',
                    'Lucida Grande',
                    'Optima',
                    'Segoe UI',
                    'Tahoma',
                    'Trebuchet MS',
                    'Verdana',
                    'Big Calson',
                    'Bodoni MT',
                    'Book Antiqua',
                    'Calisto MT',
                    'Cambria',
                    'Didot',
                    'Garamond',
                    'Georgia',
                    'Goudy Old Style',
                    'Hoefler Text',
                    'Lucida Bright',
                    'Palatino',
                    'Perpetua',
                    'Rockwell',
                    'Rockwell Extra Bold',
                    'Baskerville',
                    'Times New Roman',
                    'Consolas',
                    'Courier New',
                    'Lucida Console',
                    'Lucida Sans Typewriter',
                    'Monaco',
                    'Andale Mono',
                    'Copperplate',
                    'Papyrus',
                    'Brush Script MT'
                ],
                'Google Fonts': [
                    'Roboto',
                    'Open Sans',
                    'Lato',
                    'Montserrat',
                    'Roboto Condensed',
                    'Source Sans Pro',
                    'Oswald',
                    'Raleway',
                    'Slabo 27px',
                    'PT Sans',
                    'Roboto Slab',
                    'Merriweather',
                    'Open Sans Condensed',
                    'Ubuntu',
                    'Noto Sans',
                    'Poppins',
                    'Playfair Display',
                    'Roboto Mono',
                    'Lora',
                    'PT Serif',
                    'Titillium Web',
                    'Muli',
                    'Arimo',
                    'PT Sans Narrow',
                    'Fira Sans',
                    'Nunito',
                    'Noto Serif',
                    'Inconsolata'
                ]
            }
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
            console.log('Font "' + font + '" ' + (checkfont(font) ? '' : 'not ') + 'found');
            if (!checkfont(font)) {
                WebFont.load({
                    google: {
                        families: [font]
                    }
                });
            }
        },
        updateFontFromSelection(index) {
            this.items[index].font = this.items[index].selectedFont;
            this.checkFontExists(this.items[index].font);
        }
    },
    mounted() {
        this.fonts['WebSafe'].sort();
        this.fonts['Google Fonts'].sort();
    }
});
