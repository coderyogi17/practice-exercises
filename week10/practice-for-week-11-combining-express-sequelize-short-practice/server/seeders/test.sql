select ce.enrollment_type, a.enrollment_type, ce.participant_seq_id, ce.enroll_seq_id from CMS_ENROLLMENT ce,
(SELECT tt.enroll_seq_id, tt.participant_seq_id, tt.enrollment_type, tt.error_cd
FROM MI_WEB_ENROLLMENT tt
INNER JOIN
    (SELECT PARTICIPANT_SEQ_ID, MAX(ID) AS MaxDateTime
    FROM MI_WEB_ENROLLMENT
    GROUP BY PARTICIPANT_SEQ_ID) groupedtt
ON tt.PARTICIPANT_SEQ_ID = groupedtt.PARTICIPANT_SEQ_ID
AND tt.ID = groupedtt.MaxDateTime) a where a.participant_seq_id = ce.participant_seq_id -- and ce.PARTICIPANT_SEQ_ID = 'PART00000949155'
and a.enrollment_type != ce.enrollment_type and ce.enroll_status = 'ACTIVE' and ce.enroll_seq_id not like 'M%' and a.error_cd is null
\
select * from (select MWE.ENROLL_SEQ_ID ENROLL_ID, MWI.INCIDENT_NUM INUM from MI_WEB_ENROLLMENT MWE, MI_WORKLIST_ITEM MWI
where LTRIM(STR(MWE.ID)) = MWI.OBJ_ID AND MWE.ERROR_CD is null ) A,

(select CE.ENROLL_SEQ_ID ENROLL_ID, MWI.INCIDENT_NUM INUM from CMS_ENROLLMENT ce, MI_WORKLIST_ITEM MWI
where ce.enroll_seq_id = MWI.OBJ_ID ) B where A.ENROLL_ID = B.ENROLL_ID ORDER BY A.ENROLL_ID