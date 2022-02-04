const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './reportes/',
	customMetadata: false,
    saveCollectedJSON: true,
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: (new Date).toString()},
            //{label: 'Execution End Time', value: (new Date).toString()}
        ]
    }
});
