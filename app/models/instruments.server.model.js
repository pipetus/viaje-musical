'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Instrument Schema
 */
var MediaSchema = new Schema({
	name: {
		type: String,
		default: ''
	},
	ext: {
		type: String,
		default: ''
	}
});

var InstrumentSchema = new Schema({
	type: {
		type: String,
		default: 'instrument'
	},
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    family: {
        type: String,
        default: '',
        trim: true
    },
	pic: {
        type: String,
        default: '',
        trim: true
    },    
    pics: [],
    audio: [],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Instrument', InstrumentSchema);
