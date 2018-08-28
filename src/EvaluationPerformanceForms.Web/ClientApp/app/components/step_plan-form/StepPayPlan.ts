export class StepPayPlan { 

    constructor(
        //Basic section
        public name = '',
        public title = '',
        public department = '',
        public period = '',
        public division = '',
        public reviewType = '',
        public sapNum = '',
        //sectionI
        public teamworkRating = '', //these rating should be from 1-3
        public integrityRating = '',
        public innovationRating = '',
        public professionalismRating = '',
        //sectionII
        public rating = '', //rating 1-3 as well
        public responsibility = '',
        public summary = '',
        //sectionIII
        public startDate = '',
        public endDate = '',
        public milestone = '', //changed from goal to milestone
        //sectionIV
        public raterComments = '',
        //sectionV
        public reviewerComments = '',
        public employeeComments = '',
        //Signature Section
        public supervisorSignature = '',
        public supervisorDate = '',
        public supervisorSap = '',
        public officerSignature = '',
        public officerDate = '',
        public officerSap = '',
        public employeeSignature = '',
        public employeeDate = ''
        
        //there's more items to account for in this section but i'm not sure how to handle them
    ) { }
}