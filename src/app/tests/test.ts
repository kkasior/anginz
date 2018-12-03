export interface Itest {
    testId: number;
    testName: string;
    given: string,
    when: string,
    then: string,
    projectName: string;
    tester: string;
    solutionPath: string;
    affectedBy: string; 
    additionalInfo: string;
    testData: string; 
    testStatus: string;
}