

function tmaInputController($scope) {

$scope.NIVProc =  0;
$scope.NIVMgmt =  0;
$scope.NIVGSSMgmt =  0;
$scope.NIVFraPrev =  0;
$scope.NIVPubInq =  0;
$scope.NIVCongInq =  0;
$scope.NIVCler =  0;
$scope.NIVCash =  0;
$scope.NIVRep =  0;
$scope.IVProc =  0;
$scope.IVMgmt =  0;
$scope.IVGSSMgmt =  0;
$scope.IVFraPrev =  0;
$scope.IVPubInq =  0;
$scope.IVCongInq =  0;
$scope.IVCler =  0;
$scope.IVCash =  0;
$scope.IVRep =  0;
$scope.PPTProc =  0;
$scope.PPTMgmt =  0;
$scope.PPTGSSMgmt =  0;
$scope.PPTFraPrev =  0;
$scope.PPTPubInq =  0;
$scope.PPTCongInq =  0;
$scope.PPTCler =  0;
$scope.PPTCash =  0;
$scope.PPTRep =  0;
$scope.SCSProc =  0;
$scope.SCSMgmt =  0;
$scope.SCSGSSMgmt =  0;
$scope.SCSFraPrev =  0;
$scope.SCSPubInq =  0;
$scope.SCSCongInq =  0;
$scope.SCSCler =  0;
$scope.SCSCash =  0;
$scope.SCSRep =  0;
$scope.OUTRCustOutr =  0;
$scope.OUTRSocMedUpd =  0;
$scope.OUTROthMedOutr =  0;
$scope.MGMTSupeTask =  0;
$scope.MGMTCouTeam =  0;
$scope.MGMTEAC =  0;
$scope.MGMTICASS =  0;
$scope.MGMTRep =  0;
$scope.TRNGTrainRec =  0;
$scope.TRNGTrainCon =  0;
$scope.OTHNonCA =  0;
$scope.OTHLeave =  0;
$scope.SOGAProc =  0;

$scope.NIVTotal = function()
{	return $scope.NIVProc +
$scope.NIVMgmt +
$scope.NIVGSSMgmt +
$scope.NIVFraPrev +
$scope.NIVPubInq +
$scope.NIVCongInq +
$scope.NIVCler +
$scope.NIVCash +
$scope.NIVRep;
};

$scope.IVTotal = function()
{	return $scope.IVProc +
$scope.IVMgmt +
$scope.IVGSSMgmt +
$scope.IVFraPrev +
$scope.IVPubInq +
$scope.IVCongInq +
$scope.IVCler +
$scope.IVCash +
$scope.IVRep;

};


$scope.PPTTotal = function()
{	return $scope.PPTProc +
$scope.PPTMgmt +
$scope.PPTGSSMgmt +
$scope.PPTFraPrev +
$scope.PPTPubInq +
$scope.PPTCongInq +
$scope.PPTCler +
$scope.PPTCash +
$scope.PPTRep;
};

$scope.SCSTotal = function()
{	return $scope.SCSProc +
$scope.SCSMgmt +
$scope.SCSGSSMgmt +
$scope.SCSFraPrev +
$scope.SCSPubInq +
$scope.SCSCongInq +
$scope.SCSCler +
$scope.SCSCash +
$scope.SCSRep;
};

$scope.OUTTotal = function()
{	return $scope.OUTRCustOutr +
$scope.OUTRSocMedUpd +
$scope.OUTROthMedOutr;
};

$scope.MGMTTotal = function()
{	return $scope.MGMTSupeTask +
$scope.MGMTCouTeam +
$scope.MGMTEAC +
$scope.MGMTICASS +
$scope.MGMTRep;
};

$scope.TRNGTotal = function()
{	return $scope.TRNGTrainRec +
$scope.TRNGTrainCon;

};

$scope.OTHTotal = function()
{	return $scope.OTHNonCA +
$scope.SOGAProc +
$scope.OTHLeave ;

};


$scope.sumOfAll = function()
{
return $scope.NIVProc +
$scope.NIVMgmt +
$scope.NIVGSSMgmt +
$scope.NIVFraPrev +
$scope.NIVPubInq +
$scope.NIVCongInq +
$scope.NIVCler +
$scope.NIVCash +
$scope.NIVRep +
$scope.IVProc +
$scope.IVMgmt +
$scope.IVGSSMgmt +
$scope.IVFraPrev +
$scope.IVPubInq +
$scope.IVCongInq +
$scope.IVCler +
$scope.IVCash +
$scope.IVRep +
$scope.PPTProc +
$scope.PPTMgmt +
$scope.PPTGSSMgmt +
$scope.PPTFraPrev +
$scope.PPTPubInq +
$scope.PPTCongInq +
$scope.PPTCler +
$scope.PPTCash +
$scope.PPTRep +
$scope.SCSProc +
$scope.SCSMgmt +
$scope.SCSGSSMgmt +
$scope.SCSFraPrev +
$scope.SCSPubInq +
$scope.SCSCongInq +
$scope.SCSCler +
$scope.SCSCash +
$scope.SCSRep +
$scope.OUTRCustOutr +
$scope.OUTRSocMedUpd +
$scope.OUTROthMedOutr +
$scope.MGMTSupeTask +
$scope.MGMTCouTeam +
$scope.MGMTEAC +
$scope.MGMTICASS +
$scope.MGMTRep +
$scope.TRNGTrainRec +
$scope.TRNGTrainCon +
$scope.OTHNonCA +
$scope.OTHLeave +
$scope.SOGAProc;

};
}