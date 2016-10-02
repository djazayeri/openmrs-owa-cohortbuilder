import moment from 'moment';

let datatypeHandlers = {};

datatypeHandlers.date = {
    format: function(val) {
        return "date: " + moment(val).toString();
    },
    toXstream: function(val) {
        // expected: <date>2016-10-02 16:20:40 UTC</date>
        return `<date>${moment(val.value).format('YYYY-MM-DD [00:00:00 UTC]')}</date>`;
    }
}

datatypeHandlers.int = {
    format: function(val) {
        return `${val}`;
    },
    toXstream: function(val) {
        return `<int>${val.value}</int>`;
    }
}

export default datatypeHandlers;