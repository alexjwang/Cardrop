import {session} from "wix-storage";

$w.onReady(function () {
	$w('#text47').text = session.getItem("startDateStr");
	$w('#text49').text = session.getItem("endDateStr");
});