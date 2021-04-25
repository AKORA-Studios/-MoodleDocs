declare namespace default {
    namespace auth {
        namespace is {
            namespace age_digital_consent_verification_enabled {
                type reponse = {
                    status: number
                }
            }

            namespace minor {
                type reponse = {
                    status: number
                }
            }
        }
    }

    namespace calendar {
        namespace create {
            namespace calendar_events {
                type reponse = {
                    events: {
                        id: number
                        name: string
                        description: string
                        format: number
                        courseid: number
                        groupid: number
                        userid: number
                        repeatid: number
                        modulename: string
                        instance: number
                        eventtype: string
                        timestart: number
                        timeduration: number
                        visible: number
                        uuid: string
                        sequence: number
                        timemodified: number
                        subscriptionid: number
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
        namespace get {
            namespace action_events_by_course {
                type reponse = {
                    events: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                        categoryid: number
                        groupid: number
                        userid: number
                        repeatid: number
                        eventcount: number
                        modulename: string
                        instance: number
                        eventtype: string
                        timestart: number
                        timeduration: number
                        timesort: number
                        visible: number
                        timemodified: number
                        icon: {
                            key: string
                            component: string
                            alttext: string
                        }
                        category: {
                            id: number
                            name: string
                            idnumber: string
                            description: string
                            parent: number
                            coursecount: number
                            visible: number
                            timemodified: number
                            depth: number
                            nestedname: string
                            url: string
                        }
                        course: {
                            id: number
                            fullname: string
                            shortname: string
                            idnumber: string
                            summary: string
                            summaryformat: number
                            startdate: number
                            enddate: number
                            fullnamedisplay: string
                            viewurl: string
                        }
                        subscription: {
                            displayeventsource: number
                            subscriptionname: string
                            subscriptionurl: string
                        }
                        canedit: number
                        canDelete: number
                        Deleteurl: string
                        editurl: string
                        viewurl: string
                        formattedtime: string
                        isactionevent: number
                        iscourseevent: number
                        iscategoryevent: number
                        groupname: string
                        url: string
                        action: {
                            name: string
                            url: string
                            itemcount: number
                            actionable: number
                            showitemcount: number
                        }
                    }[]
                    firstid: number
                    lastid: number
                }
            }

            namespace action_events_by_courses {
                type reponse = {
                    groupedbycourse: {
                        events: {
                            id: number
                            name: string
                            description: string
                            descriptionformat: number
                            categoryid: number
                            groupid: number
                            userid: number
                            repeatid: number
                            eventcount: number
                            modulename: string
                            instance: number
                            eventtype: string
                            timestart: number
                            timeduration: number
                            timesort: number
                            visible: number
                            timemodified: number
                            icon: {
                                key: string
                                component: string
                                alttext: string
                            }
                            category: {
                                id: number
                                name: string
                                idnumber: string
                                description: string
                                parent: number
                                coursecount: number
                                visible: number
                                timemodified: number
                                depth: number
                                nestedname: string
                                url: string
                            }
                            course: {
                                id: number
                                fullname: string
                                shortname: string
                                idnumber: string
                                summary: string
                                summaryformat: number
                                startdate: number
                                enddate: number
                                fullnamedisplay: string
                                viewurl: string
                            }
                            subscription: {
                                displayeventsource: number
                                subscriptionname: string
                                subscriptionurl: string
                            }
                            canedit: number
                            canDelete: number
                            Deleteurl: string
                            editurl: string
                            viewurl: string
                            formattedtime: string
                            isactionevent: number
                            iscourseevent: number
                            iscategoryevent: number
                            groupname: string
                            url: string
                            action: {
                                name: string
                                url: string
                                itemcount: number
                                actionable: number
                                showitemcount: number
                            }
                        }[]
                        firstid: number
                        lastid: number
                        courseid: number
                    }[]
                }
            }

            namespace action_events_by_timesort {
                type reponse = {
                    events: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                        categoryid: number
                        groupid: number
                        userid: number
                        repeatid: number
                        eventcount: number
                        modulename: string
                        instance: number
                        eventtype: string
                        timestart: number
                        timeduration: number
                        timesort: number
                        visible: number
                        timemodified: number
                        icon: {
                            key: string
                            component: string
                            alttext: string
                        }
                        category: {
                            id: number
                            name: string
                            idnumber: string
                            description: string
                            parent: number
                            coursecount: number
                            visible: number
                            timemodified: number
                            depth: number
                            nestedname: string
                            url: string
                        }
                        course: {
                            id: number
                            fullname: string
                            shortname: string
                            idnumber: string
                            summary: string
                            summaryformat: number
                            startdate: number
                            enddate: number
                            fullnamedisplay: string
                            viewurl: string
                        }
                        subscription: {
                            displayeventsource: number
                            subscriptionname: string
                            subscriptionurl: string
                        }
                        canedit: number
                        canDelete: number
                        Deleteurl: string
                        editurl: string
                        viewurl: string
                        formattedtime: string
                        isactionevent: number
                        iscourseevent: number
                        iscategoryevent: number
                        groupname: string
                        url: string
                        action: {
                            name: string
                            url: string
                            itemcount: number
                            actionable: number
                            showitemcount: number
                        }
                    }[]
                    firstid: number
                    lastid: number
                }
            }

            namespace calendar_day_view {
                type reponse = {
                    events: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                        categoryid: number
                        groupid: number
                        userid: number
                        repeatid: number
                        eventcount: number
                        modulename: string
                        instance: number
                        eventtype: string
                        timestart: number
                        timeduration: number
                        timesort: number
                        visible: number
                        timemodified: number
                        icon: {
                            key: string
                            component: string
                            alttext: string
                        }
                        category: {
                            id: number
                            name: string
                            idnumber: string
                            description: string
                            parent: number
                            coursecount: number
                            visible: number
                            timemodified: number
                            depth: number
                            nestedname: string
                            url: string
                        }
                        course: {
                            id: number
                            fullname: string
                            shortname: string
                            idnumber: string
                            summary: string
                            summaryformat: number
                            startdate: number
                            enddate: number
                            fullnamedisplay: string
                            viewurl: string
                        }
                        subscription: {
                            displayeventsource: number
                            subscriptionname: string
                            subscriptionurl: string
                        }
                        canedit: number
                        canDelete: number
                        Deleteurl: string
                        editurl: string
                        viewurl: string
                        formattedtime: string
                        isactionevent: number
                        iscourseevent: number
                        iscategoryevent: number
                        groupname: string
                        url: string
                        islastday: number
                        calendareventtype: string
                        popupname: string
                        mindaytimestamp: number
                        mindayerror: string
                        maxdaytimestamp: number
                        maxdayerror: string
                        draggable: number
                    }[]
                    defaulteventcontext: number
                    filter_selector: string
                    courseid: number
                    categoryid: number
                    neweventtimestamp: number
                    date: {
                        seconds: number
                        minutes: number
                        hours: number
                        mday: number
                        wday: number
                        mon: number
                        year: number
                        yday: number
                        weekday: string
                        month: string
                        timestamp: number
                    }
                    periodname: string
                    previousperiod: {
                        seconds: number
                        minutes: number
                        hours: number
                        mday: number
                        wday: number
                        mon: number
                        year: number
                        yday: number
                        weekday: string
                        month: string
                        timestamp: number
                    }
                    previousperiodlink: string
                    previousperiodname: string
                    nextperiod: {
                        seconds: number
                        minutes: number
                        hours: number
                        mday: number
                        wday: number
                        mon: number
                        year: number
                        yday: number
                        weekday: string
                        month: string
                        timestamp: number
                    }
                    nextperiodname: string
                    nextperiodlink: string
                    larrow: string
                    rarrow: string
                }
            }

            namespace calendar_event_by_id {
                type reponse = {
                    event: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                        categoryid: number
                        groupid: number
                        userid: number
                        repeatid: number
                        eventcount: number
                        modulename: string
                        instance: number
                        eventtype: string
                        timestart: number
                        timeduration: number
                        timesort: number
                        visible: number
                        timemodified: number
                        icon: {
                            key: string
                            component: string
                            alttext: string
                        }
                        category: {
                            id: number
                            name: string
                            idnumber: string
                            description: string
                            parent: number
                            coursecount: number
                            visible: number
                            timemodified: number
                            depth: number
                            nestedname: string
                            url: string
                        }
                        course: {
                            id: number
                            fullname: string
                            shortname: string
                            idnumber: string
                            summary: string
                            summaryformat: number
                            startdate: number
                            enddate: number
                            fullnamedisplay: string
                            viewurl: string
                        }
                        subscription: {
                            displayeventsource: number
                            subscriptionname: string
                            subscriptionurl: string
                        }
                        canedit: number
                        canDelete: number
                        Deleteurl: string
                        editurl: string
                        viewurl: string
                        formattedtime: string
                        isactionevent: number
                        iscourseevent: number
                        iscategoryevent: number
                        groupname: string
                        url: string
                        action: {
                            name: string
                            url: string
                            itemcount: number
                            actionable: number
                            showitemcount: number
                        }
                    }
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace calendar_events {
                type reponse = {
                    events: {
                        id: number
                        name: string
                        description: string
                        format: number
                        courseid: number
                        categoryid: number
                        groupid: number
                        userid: number
                        repeatid: number
                        modulename: string
                        instance: number
                        eventtype: string
                        timestart: number
                        timeduration: number
                        visible: number
                        uuid: string
                        sequence: number
                        timemodified: number
                        subscriptionid: number
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace calendar_monthly_view {
                type reponse = {
                    url: string
                    courseid: number
                    categoryid: number
                    filter_selector: string
                    weeks: {
                        prepadding: {}[]
                        postpadding: {}[]
                        days: {
                            seconds: number
                            minutes: number
                            hours: number
                            mday: number
                            wday: number
                            year: number
                            yday: number
                            istoday: number
                            isweekend: number
                            timestamp: number
                            neweventtimestamp: number
                            viewdaylink: string
                            events: {
                                id: number
                                name: string
                                description: string
                                descriptionformat: number
                                categoryid: number
                                groupid: number
                                userid: number
                                repeatid: number
                                eventcount: number
                                modulename: string
                                instance: number
                                eventtype: string
                                timestart: number
                                timeduration: number
                                timesort: number
                                visible: number
                                timemodified: number
                                icon: {
                                    key: string
                                    component: string
                                    alttext: string
                                }
                                category: {
                                    id: number
                                    name: string
                                    idnumber: string
                                    description: string
                                    parent: number
                                    coursecount: number
                                    visible: number
                                    timemodified: number
                                    depth: number
                                    nestedname: string
                                    url: string
                                }
                                course: {
                                    id: number
                                    fullname: string
                                    shortname: string
                                    idnumber: string
                                    summary: string
                                    summaryformat: number
                                    startdate: number
                                    enddate: number
                                    fullnamedisplay: string
                                    viewurl: string
                                }
                                subscription: {
                                    displayeventsource: number
                                    subscriptionname: string
                                    subscriptionurl: string
                                }
                                canedit: number
                                canDelete: number
                                Deleteurl: string
                                editurl: string
                                viewurl: string
                                formattedtime: string
                                isactionevent: number
                                iscourseevent: number
                                iscategoryevent: number
                                groupname: string
                                url: string
                                islastday: number
                                calendareventtype: string
                                popupname: string
                                mindaytimestamp: number
                                mindayerror: string
                                maxdaytimestamp: number
                                maxdayerror: string
                                draggable: number
                            }[]
                            hasevents: number
                            calendareventtypes: {}[]
                            previousperiod: number
                            nextperiod: number
                            navigation: string
                            haslastdayofevent: number
                            popovertitle: string
                        }[]
                    }[]
                    daynames: {
                        dayno: number
                        shortname: string
                        fullname: string
                    }[]
                    view: string
                    date: {
                        seconds: number
                        minutes: number
                        hours: number
                        mday: number
                        wday: number
                        mon: number
                        year: number
                        yday: number
                        weekday: string
                        month: string
                        timestamp: number
                    }
                    periodname: string
                    includenavigation: number
                    initialeventsloaded: number
                    previousperiod: {
                        seconds: number
                        minutes: number
                        hours: number
                        mday: number
                        wday: number
                        mon: number
                        year: number
                        yday: number
                        weekday: string
                        month: string
                        timestamp: number
                    }
                    previousperiodlink: string
                    previousperiodname: string
                    nextperiod: {
                        seconds: number
                        minutes: number
                        hours: number
                        mday: number
                        wday: number
                        mon: number
                        year: number
                        yday: number
                        weekday: string
                        month: string
                        timestamp: number
                    }
                    nextperiodname: string
                    nextperiodlink: string
                    larrow: string
                    rarrow: string
                    defaulteventcontext: number
                }
            }

            namespace calendar_upcoming_view {
                type reponse = {
                    events: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                        categoryid: number
                        groupid: number
                        userid: number
                        repeatid: number
                        eventcount: number
                        modulename: string
                        instance: number
                        eventtype: string
                        timestart: number
                        timeduration: number
                        timesort: number
                        visible: number
                        timemodified: number
                        icon: {
                            key: string
                            component: string
                            alttext: string
                        }
                        category: {
                            id: number
                            name: string
                            idnumber: string
                            description: string
                            parent: number
                            coursecount: number
                            visible: number
                            timemodified: number
                            depth: number
                            nestedname: string
                            url: string
                        }
                        course: {
                            id: number
                            fullname: string
                            shortname: string
                            idnumber: string
                            summary: string
                            summaryformat: number
                            startdate: number
                            enddate: number
                            fullnamedisplay: string
                            viewurl: string
                        }
                        subscription: {
                            displayeventsource: number
                            subscriptionname: string
                            subscriptionurl: string
                        }
                        canedit: number
                        canDelete: number
                        Deleteurl: string
                        editurl: string
                        viewurl: string
                        formattedtime: string
                        isactionevent: number
                        iscourseevent: number
                        iscategoryevent: number
                        groupname: string
                        url: string
                        islastday: number
                        calendareventtype: string
                        popupname: string
                        mindaytimestamp: number
                        mindayerror: string
                        maxdaytimestamp: number
                        maxdayerror: string
                        draggable: number
                    }[]
                    defaulteventcontext: number
                    filter_selector: string
                    courseid: number
                    categoryid: number
                    isloggedin: number
                }
            }
        }
    }

    namespace cohort {
        namespace add {
            namespace cohort_members {
                type reponse = {
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
    }

    namespace competency {
        namespace create {
            namespace competency_framework {
                type reponse = {
                    shortname: string
                    idnumber: string
                    description: string
                    descriptionformat: number
                    visible: number
                    scaleid: number
                    scaleconfiguration: string
                    contextid: number
                    taxonomies: string
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    canmanage: number
                    competenciescount: number
                    contextname: string
                    contextnamenoprefix: string
                }
            }

            namespace plan {
                type reponse = {
                    name: string
                    description: string
                    descriptionformat: number
                    userid: number
                    templateid: number
                    origtemplateid: number
                    status: number
                    duedate: number
                    reviewerid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    statusname: string
                    isbasedontemplate: number
                    canmanage: number
                    canrequestreview: number
                    canreview: number
                    canbeedited: number
                    isactive: number
                    isdraft: number
                    iscompleted: number
                    isinreview: number
                    iswaitingforreview: number
                    isreopenallowed: number
                    iscompleteallowed: number
                    isunlinkallowed: number
                    isrequestreviewallowed: number
                    iscancelreviewrequestallowed: number
                    isstartreviewallowed: number
                    isstopreviewallowed: number
                    isapproveallowed: number
                    isunapproveallowed: number
                    duedateformatted: string
                    commentarea: {
                        component: string
                        commentarea: string
                        itemid: number
                        courseid: number
                        contextid: number
                        cid: string
                        autostart: number
                        canpost: number
                        canview: number
                        count: number
                        collapsediconkey: string
                        displaytotalcount: number
                        displaycancel: number
                        fullwidth: number
                        linktext: string
                        notoggle: number
                        template: string
                        canpostorhascomments: number
                    }
                    reviewer: {
                        id: number
                        email: string
                        idnumber: string
                        phone1: string
                        phone2: string
                        department: string
                        institution: string
                        fullname: string
                        identity: string
                        profileurl: string
                        profileimageurl: string
                        profileimageurlsmall: string
                    }
                    template: {
                        shortname: string
                        description: string
                        descriptionformat: number
                        duedate: number
                        visible: number
                        contextid: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                        duedateformatted: string
                        cohortscount: number
                        planscount: number
                        canmanage: number
                        canread: number
                        contextname: string
                        contextnamenoprefix: string
                    }
                    url: string
                }
            }

            namespace template {
                type reponse = {
                    shortname: string
                    description: string
                    descriptionformat: number
                    duedate: number
                    visible: number
                    contextid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    duedateformatted: string
                    cohortscount: number
                    planscount: number
                    canmanage: number
                    canread: number
                    contextname: string
                    contextnamenoprefix: string
                }
            }

            namespace user_evidence_competency {
                type reponse = {
                    userevidenceid: number
                    competencyid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                }
            }
        }
        namespace list {
            namespace competencies {
                type reponse = {
                    shortname: string
                    idnumber: string
                    description: string
                    descriptionformat: number
                    sortorder: number
                    parentid: number
                    path: string
                    ruleoutcome: number
                    ruletype: string
                    ruleconfig: string
                    scaleid: number
                    scaleconfiguration: string
                    competencyframeworkid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                }[]
            }

            namespace competencies_in_template {
                type reponse = {
                    shortname: string
                    idnumber: string
                    description: string
                    descriptionformat: number
                    sortorder: number
                    parentid: number
                    path: string
                    ruleoutcome: number
                    ruletype: string
                    ruleconfig: string
                    scaleid: number
                    scaleconfiguration: string
                    competencyframeworkid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                }[]
            }

            namespace competency_frameworks {
                type reponse = {
                    shortname: string
                    idnumber: string
                    description: string
                    descriptionformat: number
                    visible: number
                    scaleid: number
                    scaleconfiguration: string
                    contextid: number
                    taxonomies: string
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    canmanage: number
                    competenciescount: number
                    contextname: string
                    contextnamenoprefix: string
                }[]
            }

            namespace course_competencies {
                type reponse = {
                    competency: {
                        shortname: string
                        idnumber: string
                        description: string
                        descriptionformat: number
                        sortorder: number
                        parentid: number
                        path: string
                        ruleoutcome: number
                        ruletype: string
                        ruleconfig: string
                        scaleid: number
                        scaleconfiguration: string
                        competencyframeworkid: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                    }
                    coursecompetency: {
                        courseid: number
                        competencyid: number
                        sortorder: number
                        ruleoutcome: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                    }
                }[]
            }

            namespace plan_competencies {
                type reponse = {
                    competency: {
                        shortname: string
                        idnumber: string
                        description: string
                        descriptionformat: number
                        sortorder: number
                        parentid: number
                        path: string
                        ruleoutcome: number
                        ruletype: string
                        ruleconfig: string
                        scaleid: number
                        scaleconfiguration: string
                        competencyframeworkid: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                    }
                    usercompetency: {
                        userid: number
                        competencyid: number
                        status: number
                        reviewerid: number
                        proficiency: number
                        grade: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                        canrequestreview: number
                        canreview: number
                        gradename: string
                        isrequestreviewallowed: number
                        iscancelreviewrequestallowed: number
                        isstartreviewallowed: number
                        isstopreviewallowed: number
                        isstatusidle: number
                        isstatusinreview: number
                        isstatuswaitingforreview: number
                        proficiencyname: string
                        reviewer: {
                            id: number
                            email: string
                            idnumber: string
                            phone1: string
                            phone2: string
                            department: string
                            institution: string
                            fullname: string
                            identity: string
                            profileurl: string
                            profileimageurl: string
                            profileimageurlsmall: string
                        }
                        statusname: string
                        url: string
                    }
                    usercompetencyplan: {
                        userid: number
                        competencyid: number
                        proficiency: number
                        grade: number
                        planid: number
                        sortorder: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                        gradename: string
                        proficiencyname: string
                    }
                }[]
            }

            namespace templates {
                type reponse = {
                    shortname: string
                    description: string
                    descriptionformat: number
                    duedate: number
                    visible: number
                    contextid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    duedateformatted: string
                    cohortscount: number
                    planscount: number
                    canmanage: number
                    canread: number
                    contextname: string
                    contextnamenoprefix: string
                }[]
            }

            namespace templates_using_competency {
                type reponse = {
                    shortname: string
                    description: string
                    descriptionformat: number
                    duedate: number
                    visible: number
                    contextid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    duedateformatted: string
                    cohortscount: number
                    planscount: number
                    canmanage: number
                    canread: number
                    contextname: string
                    contextnamenoprefix: string
                }[]
            }

            namespace user_plans {
                type reponse = {
                    name: string
                    description: string
                    descriptionformat: number
                    userid: number
                    templateid: number
                    origtemplateid: number
                    status: number
                    duedate: number
                    reviewerid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    statusname: string
                    isbasedontemplate: number
                    canmanage: number
                    canrequestreview: number
                    canreview: number
                    canbeedited: number
                    isactive: number
                    isdraft: number
                    iscompleted: number
                    isinreview: number
                    iswaitingforreview: number
                    isreopenallowed: number
                    iscompleteallowed: number
                    isunlinkallowed: number
                    isrequestreviewallowed: number
                    iscancelreviewrequestallowed: number
                    isstartreviewallowed: number
                    isstopreviewallowed: number
                    isapproveallowed: number
                    isunapproveallowed: number
                    duedateformatted: string
                    commentarea: {
                        component: string
                        commentarea: string
                        itemid: number
                        courseid: number
                        contextid: number
                        cid: string
                        autostart: number
                        canpost: number
                        canview: number
                        count: number
                        collapsediconkey: string
                        displaytotalcount: number
                        displaycancel: number
                        fullwidth: number
                        linktext: string
                        notoggle: number
                        template: string
                        canpostorhascomments: number
                    }
                    reviewer: {
                        id: number
                        email: string
                        idnumber: string
                        phone1: string
                        phone2: string
                        department: string
                        institution: string
                        fullname: string
                        identity: string
                        profileurl: string
                        profileimageurl: string
                        profileimageurlsmall: string
                    }
                    template: {
                        shortname: string
                        description: string
                        descriptionformat: number
                        duedate: number
                        visible: number
                        contextid: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                        duedateformatted: string
                        cohortscount: number
                        planscount: number
                        canmanage: number
                        canread: number
                        contextname: string
                        contextnamenoprefix: string
                    }
                    url: string
                }[]
            }
        }
        namespace read {
            namespace competency {
                type reponse = {
                    shortname: string
                    idnumber: string
                    description: string
                    descriptionformat: number
                    sortorder: number
                    parentid: number
                    path: string
                    ruleoutcome: number
                    ruletype: string
                    ruleconfig: string
                    scaleid: number
                    scaleconfiguration: string
                    competencyframeworkid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                }
            }

            namespace competency_framework {
                type reponse = {
                    shortname: string
                    idnumber: string
                    description: string
                    descriptionformat: number
                    visible: number
                    scaleid: number
                    scaleconfiguration: string
                    contextid: number
                    taxonomies: string
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    canmanage: number
                    competenciescount: number
                    contextname: string
                    contextnamenoprefix: string
                }
            }

            namespace plan {
                type reponse = {
                    name: string
                    description: string
                    descriptionformat: number
                    userid: number
                    templateid: number
                    origtemplateid: number
                    status: number
                    duedate: number
                    reviewerid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    statusname: string
                    isbasedontemplate: number
                    canmanage: number
                    canrequestreview: number
                    canreview: number
                    canbeedited: number
                    isactive: number
                    isdraft: number
                    iscompleted: number
                    isinreview: number
                    iswaitingforreview: number
                    isreopenallowed: number
                    iscompleteallowed: number
                    isunlinkallowed: number
                    isrequestreviewallowed: number
                    iscancelreviewrequestallowed: number
                    isstartreviewallowed: number
                    isstopreviewallowed: number
                    isapproveallowed: number
                    isunapproveallowed: number
                    duedateformatted: string
                    commentarea: {
                        component: string
                        commentarea: string
                        itemid: number
                        courseid: number
                        contextid: number
                        cid: string
                        autostart: number
                        canpost: number
                        canview: number
                        count: number
                        collapsediconkey: string
                        displaytotalcount: number
                        displaycancel: number
                        fullwidth: number
                        linktext: string
                        notoggle: number
                        template: string
                        canpostorhascomments: number
                    }
                    reviewer: {
                        id: number
                        email: string
                        idnumber: string
                        phone1: string
                        phone2: string
                        department: string
                        institution: string
                        fullname: string
                        identity: string
                        profileurl: string
                        profileimageurl: string
                        profileimageurlsmall: string
                    }
                    template: {
                        shortname: string
                        description: string
                        descriptionformat: number
                        duedate: number
                        visible: number
                        contextid: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                        duedateformatted: string
                        cohortscount: number
                        planscount: number
                        canmanage: number
                        canread: number
                        contextname: string
                        contextnamenoprefix: string
                    }
                    url: string
                }
            }

            namespace template {
                type reponse = {
                    shortname: string
                    description: string
                    descriptionformat: number
                    duedate: number
                    visible: number
                    contextid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    duedateformatted: string
                    cohortscount: number
                    planscount: number
                    canmanage: number
                    canread: number
                    contextname: string
                    contextnamenoprefix: string
                }
            }

            namespace user_evidence {
                type reponse = {
                    userid: number
                    name: string
                    description: string
                    descriptionformat: number
                    url: string
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    canmanage: number
                    competencycount: number
                    competencies: {
                        shortname: string
                        idnumber: string
                        description: string
                        descriptionformat: number
                        sortorder: number
                        parentid: number
                        path: string
                        ruleoutcome: number
                        ruletype: string
                        ruleconfig: string
                        scaleid: number
                        scaleconfiguration: string
                        competencyframeworkid: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                    }[]
                    filecount: number
                    files: {
                        contextid: number
                        component: string
                        filearea: string
                        itemid: number
                        filepath: string
                        filename: string
                        isdir: number
                        timemodified: number
                        timecreated: number
                        filesize: number
                        author: string
                        license: string
                        filenameshort: string
                        filesizeformatted: string
                        icon: string
                        timecreatedformatted: string
                        timemodifiedformatted: string
                        url: string
                    }[]
                    hasurlorfiles: number
                    urlshort: string
                }
            }
        }
        namespace update {
            namespace plan {
                type reponse = {
                    name: string
                    description: string
                    descriptionformat: number
                    userid: number
                    templateid: number
                    origtemplateid: number
                    status: number
                    duedate: number
                    reviewerid: number
                    id: number
                    timecreated: number
                    timemodified: number
                    usermodified: number
                    statusname: string
                    isbasedontemplate: number
                    canmanage: number
                    canrequestreview: number
                    canreview: number
                    canbeedited: number
                    isactive: number
                    isdraft: number
                    iscompleted: number
                    isinreview: number
                    iswaitingforreview: number
                    isreopenallowed: number
                    iscompleteallowed: number
                    isunlinkallowed: number
                    isrequestreviewallowed: number
                    iscancelreviewrequestallowed: number
                    isstartreviewallowed: number
                    isstopreviewallowed: number
                    isapproveallowed: number
                    isunapproveallowed: number
                    duedateformatted: string
                    commentarea: {
                        component: string
                        commentarea: string
                        itemid: number
                        courseid: number
                        contextid: number
                        cid: string
                        autostart: number
                        canpost: number
                        canview: number
                        count: number
                        collapsediconkey: string
                        displaytotalcount: number
                        displaycancel: number
                        fullwidth: number
                        linktext: string
                        notoggle: number
                        template: string
                        canpostorhascomments: number
                    }
                    reviewer: {
                        id: number
                        email: string
                        idnumber: string
                        phone1: string
                        phone2: string
                        department: string
                        institution: string
                        fullname: string
                        identity: string
                        profileurl: string
                        profileimageurl: string
                        profileimageurlsmall: string
                    }
                    template: {
                        shortname: string
                        description: string
                        descriptionformat: number
                        duedate: number
                        visible: number
                        contextid: number
                        id: number
                        timecreated: number
                        timemodified: number
                        usermodified: number
                        duedateformatted: string
                        cohortscount: number
                        planscount: number
                        canmanage: number
                        canread: number
                        contextname: string
                        contextnamenoprefix: string
                    }
                    url: string
                }
            }
        }
    }

    namespace course {
        namespace check {
            namespace updates {
                type reponse = {
                    instances: {
                        contextlevel: string
                        id: number
                        updates: {
                            name: string
                            timeupdated: number
                            itemids: {}[]
                        }[]
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
        namespace Delete {
            namespace courses {
                type reponse = {
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
        namespace get {
            namespace activities_overview {
                type reponse = {
                    courses: {
                        id: number
                        overviews: {
                            module: string
                            overviewtext: string
                        }[]
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace categories {
                type reponse = {
                    id: number
                    name: string
                    idnumber: string
                    description: string
                    descriptionformat: number
                    parent: number
                    sortorder: number
                    coursecount: number
                    visible: number
                    visibleold: number
                    timemodified: number
                    depth: number
                    path: string
                    theme: string
                }[]
            }

            namespace contents {
                type reponse = {
                    id: number
                    name: string
                    visible: number
                    summary: string
                    summaryformat: number
                    section: number
                    hiddenbynumsections: number
                    uservisible: number
                    availabilityinfo: string
                    modules: {
                        id: number
                        url: string
                        name: string
                        instance: number
                        description: string
                        visible: number
                        uservisible: number
                        availabilityinfo: string
                        visibleoncoursepage: number
                        modicon: string
                        modname: string
                        modplural: string
                        availability: string
                        indent: number
                        contents: {
                            type: string
                            filename: string
                            filepath: string
                            filesize: number
                            fileurl: string
                            content: string
                            timecreated: number
                            timemodified: number
                            sortorder: number
                            mimetype: string
                            isexternalfile: number
                            repositorytype: string
                            userid: number
                            author: string
                            license: string
                        }[]
                    }[]
                }[]
            }

            namespace course_module {
                type reponse = {
                    cm: {
                        id: number
                        course: number
                        module: number
                        name: string
                        modname: string
                        instance: number
                        section: number
                        sectionnum: number
                        groupmode: number
                        groupingid: number
                        completion: number
                        idnumber: string
                        added: number
                        score: number
                        indent: number
                        visible: number
                        visibleoncoursepage: number
                        visibleold: number
                        completiongradeitemnumber: number
                        completionview: number
                        completionexpected: number
                        showdescription: number
                        availability: string
                        grade: number
                        scale: string
                        gradepass: string
                        gradecat: number
                        advancedgrading: {
                            area: string
                            method: string
                        }[]
                        outcomes: {
                            id: string
                            name: string
                            scale: string
                        }[]
                    }
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace course_module_by_instance {
                type reponse = {
                    cm: {
                        id: number
                        course: number
                        module: number
                        name: string
                        modname: string
                        instance: number
                        section: number
                        sectionnum: number
                        groupmode: number
                        groupingid: number
                        completion: number
                        idnumber: string
                        added: number
                        score: number
                        indent: number
                        visible: number
                        visibleoncoursepage: number
                        visibleold: number
                        completiongradeitemnumber: number
                        completionview: number
                        completionexpected: number
                        showdescription: number
                        availability: string
                        grade: number
                        scale: string
                        gradepass: string
                        gradecat: number
                        advancedgrading: {
                            area: string
                            method: string
                        }[]
                        outcomes: {
                            id: string
                            name: string
                            scale: string
                        }[]
                    }
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace courses {
                type reponse = {
                    id: number
                    shortname: string
                    categoryid: number
                    categorysortorder: number
                    fullname: string
                    displayname: string
                    idnumber: string
                    summary: string
                    summaryformat: number
                    format: string
                    showgrades: number
                    newsitems: number
                    startdate: number
                    enddate: number
                    numsections: number
                    maxbytes: number
                    showreports: number
                    visible: number
                    hiddensections: number
                    groupmode: number
                    groupmodeforce: number
                    defaultgroupingid: number
                    timecreated: number
                    timemodified: number
                    enablecompletion: number
                    completionnotify: number
                    lang: string
                    forcetheme: string
                    courseformatoptions: {
                        name: string
                        value: string
                    }[]
                }[]
            }

            namespace courses_by_field {
                type reponse = {
                    courses: {
                        id: number
                        fullname: string
                        displayname: string
                        shortname: string
                        categoryid: number
                        categoryname: string
                        sortorder: number
                        summary: string
                        summaryformat: number
                        summaryfiles: {
                            filename: string
                            filepath: string
                            filesize: number
                            fileurl: string
                            timemodified: number
                            mimetype: string
                            isexternalfile: number
                            repositorytype: string
                        }[]
                        overviewfiles: {
                            filename: string
                            filepath: string
                            filesize: number
                            fileurl: string
                            timemodified: number
                            mimetype: string
                            isexternalfile: number
                            repositorytype: string
                        }[]
                        contacts: {
                            id: number
                            fullname: string
                        }[]
                        enrollmentmethods: {}[]
                        idnumber: string
                        format: string
                        showgrades: number
                        newsitems: number
                        startdate: number
                        enddate: number
                        maxbytes: number
                        showreports: number
                        visible: number
                        groupmode: number
                        groupmodeforce: number
                        defaultgroupingid: number
                        enablecompletion: number
                        completionnotify: number
                        lang: string
                        theme: string
                        marker: number
                        legacyfiles: number
                        calendartype: string
                        timecreated: number
                        timemodified: number
                        requested: number
                        cacherev: number
                        filters: {
                            filter: string
                            localstate: number
                            inheritedstate: number
                        }[]
                        courseformatoptions: {
                            name: string
                            value: string
                        }[]
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace updates_since {
                type reponse = {
                    instances: {
                        contextlevel: string
                        id: number
                        updates: {
                            name: string
                            timeupdated: number
                            itemids: {}[]
                        }[]
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace user_administration_options {
                type reponse = {
                    courses: {
                        id: number
                        options: {
                            name: string
                            available: number
                        }[]
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace user_navigation_options {
                type reponse = {
                    courses: {
                        id: number
                        options: {
                            name: string
                            available: number
                        }[]
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
    }

    namespace enrol {
        namespace edit {
            namespace user_enrolment {
                type reponse = {
                    result: number
                    errors: {
                        key: string
                        message: string
                    }[]
                }
            }
        }
        namespace get {
            namespace enrolled_users {
                type reponse = {
                    id: number
                    username: string
                    firstname: string
                    lastname: string
                    fullname: string
                    email: string
                    address: string
                    phone1: string
                    phone2: string
                    icq: string
                    skype: string
                    yahoo: string
                    aim: string
                    msn: string
                    department: string
                    institution: string
                    idnumber: string
                    interests: string
                    firstaccess: number
                    lastaccess: number
                    description: string
                    descriptionformat: number
                    city: string
                    url: string
                    country: string
                    profileimageurlsmall: string
                    profileimageurl: string
                    customfields: {
                        type: string
                        value: string
                        name: string
                        shortname: string
                    }[]
                    groups: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                    }[]
                    roles: {
                        roleid: number
                        name: string
                        shortname: string
                        sortorder: number
                    }[]
                    preferences: {
                        name: string
                        value: string
                    }[]
                    enrolledcourses: {
                        id: number
                        fullname: string
                        shortname: string
                    }[]
                }[]
            }

            namespace enrolled_users_with_capability {
                type reponse = {
                    courseid: number
                    capability: string
                    users: {
                        id: number
                        username: string
                        firstname: string
                        lastname: string
                        fullname: string
                        email: string
                        address: string
                        phone1: string
                        phone2: string
                        icq: string
                        skype: string
                        yahoo: string
                        aim: string
                        msn: string
                        department: string
                        institution: string
                        interests: string
                        firstaccess: number
                        lastaccess: number
                        description: string
                        descriptionformat: number
                        city: string
                        url: string
                        country: string
                        profileimageurlsmall: string
                        profileimageurl: string
                        customfields: {
                            type: string
                            value: string
                            name: string
                            shortname: string
                        }[]
                        groups: {
                            id: number
                            name: string
                            description: string
                        }[]
                        roles: {
                            roleid: number
                            name: string
                            shortname: string
                            sortorder: number
                        }[]
                        preferences: {
                            name: string
                            value: string
                        }[]
                        enrolledcourses: {
                            id: number
                            fullname: string
                            shortname: string
                        }[]
                    }[]
                }[]
            }

            namespace potential_users {
                type reponse = {
                    id: number
                    username: string
                    firstname: string
                    lastname: string
                    fullname: string
                    email: string
                    address: string
                    phone1: string
                    phone2: string
                    icq: string
                    skype: string
                    yahoo: string
                    aim: string
                    msn: string
                    department: string
                    institution: string
                    idnumber: string
                    interests: string
                    firstaccess: number
                    lastaccess: number
                    auth: string
                    suspended: number
                    confirmed: number
                    lang: string
                    calendartype: string
                    theme: string
                    timezone: string
                    mailformat: number
                    description: string
                    descriptionformat: number
                    city: string
                    url: string
                    country: string
                    profileimageurlsmall: string
                    profileimageurl: string
                    customfields: {
                        type: string
                        value: string
                        name: string
                        shortname: string
                    }[]
                    preferences: {
                        name: string
                        value: string
                    }[]
                }[]
            }

            namespace users_courses {
                type reponse = {
                    id: number
                    shortname: string
                    fullname: string
                    enrolledusercount: number
                    idnumber: string
                    visible: number
                    summary: string
                    summaryformat: number
                    format: string
                    showgrades: number
                    lang: string
                    enablecompletion: number
                    category: number
                    progress: number
                    startdate: number
                    enddate: number
                }[]
            }
        }
    }

    namespace form {
        namespace get {
            namespace filetypes_browser_data {
                type reponse = {
                    groups: {
                        key: string
                        name: string
                        selectable: number
                        selected: number
                        ext: string
                        expanded: number
                        types: {
                            key: string
                            name: string
                            selected: number
                            ext: string
                        }[]
                    }[]
                }
            }
        }
    }

    namespace get {
        namespace component {
            namespace strings {
                type reponse = {
                    stringid: string
                    string: string
                }[]
            }
        }
        namespace strings {
            namespace core_get_strings {
                type reponse = {
                    stringid: string
                    component: string
                    lang: string
                    string: string
                }[]
            }
        }
    }

    namespace grading {
        namespace get {
            namespace definitions {
                type reponse = {
                    areas: {
                        cmid: number
                        contextid: number
                        component: string
                        areaname: string
                        activemethod: string
                        definitions: {
                            id: number
                            method: string
                            name: string
                            description: string
                            descriptionformat: number
                            status: number
                            copiedfromid: number
                            timecreated: number
                            usercreated: number
                            timemodified: number
                            usermodified: number
                            timecopied: number
                            guide: {
                                guide_criteria: {
                                    id: number
                                    sortorder: number
                                    description: string
                                    descriptionformat: number
                                    shortname: string
                                    descriptionmarkers: string
                                    descriptionmarkersformat: number
                                    maxscore: number
                                }[]
                                guide_comments: {
                                    id: number
                                    sortorder: number
                                    description: string
                                    descriptionformat: number
                                }[]
                            }
                            rubric: {
                                rubric_criteria: {
                                    id: number
                                    sortorder: number
                                    description: string
                                    descriptionformat: number
                                    levels: {
                                        id: number
                                        score: number
                                        definition: string
                                        definitionformat: number
                                    }[]
                                }[]
                            }
                        }[]
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace gradingform_instances {
                type reponse = {
                    instances: {
                        id: number
                        raterid: number
                        itemid: number
                        rawgrade: string
                        status: number
                        feedback: string
                        feedbackformat: number
                        timemodified: number
                        guide: {
                            criteria: {
                                id: number
                                criterionid: number
                                levelid: number
                                remark: string
                                remarkformat: number
                                score: number
                            }[]
                        }
                        rubric: {
                            criteria: {
                                id: number
                                criterionid: number
                                levelid: number
                                remark: string
                                remarkformat: number
                            }[]
                        }
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
    }

    namespace group {
        namespace get {
            namespace activity_allowed_groups {
                type reponse = {
                    groups: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                        idnumber: string
                        courseid: number
                    }[]
                    canaccessallgroups: number
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace activity_groupmode {
                type reponse = {
                    groupmode: number
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace course_groupings {
                type reponse = {
                    id: number
                    courseid: number
                    name: string
                    description: string
                    descriptionformat: number
                    idnumber: string
                }[]
            }

            namespace course_groups {
                type reponse = {
                    id: number
                    courseid: number
                    name: string
                    description: string
                    descriptionformat: number
                    enrolmentkey: string
                    idnumber: string
                }[]
            }

            namespace course_user_groups {
                type reponse = {
                    groups: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                        idnumber: string
                        courseid: number
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace group_members {
                type reponse = {
                    groupid: number
                    userids: {}[]
                }[]
            }

            namespace groupings {
                type reponse = {
                    id: number
                    courseid: number
                    name: string
                    description: string
                    descriptionformat: number
                    idnumber: string
                    groups: {
                        id: number
                        courseid: number
                        name: string
                        description: string
                        descriptionformat: number
                        enrolmentkey: string
                        idnumber: string
                    }[]
                }[]
            }

            namespace groups {
                type reponse = {
                    id: number
                    courseid: number
                    name: string
                    description: string
                    descriptionformat: number
                    enrolmentkey: string
                    idnumber: string
                }[]
            }
        }
    }

    namespace message {
        namespace data {
            namespace for_messagearea_contacts {
                type reponse = {
                    contacts: {
                        userid: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        ismessaging: number
                        sentfromcurrentuser: number
                        lastmessage: string
                        messageid: number
                        showonlinestatus: number
                        isonline: number
                        isread: number
                        isblocked: number
                        unreadcount: number
                    }[]
                }
            }

            namespace for_messagearea_conversations {
                type reponse = {
                    contacts: {
                        userid: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        ismessaging: number
                        sentfromcurrentuser: number
                        lastmessage: string
                        messageid: number
                        showonlinestatus: number
                        isonline: number
                        isread: number
                        isblocked: number
                        unreadcount: number
                    }[]
                }
            }

            namespace for_messagearea_get_most_recent_message {
                type reponse = {
                    id: number
                    useridfrom: number
                    useridto: number
                    text: string
                    displayblocktime: number
                    blocktime: string
                    position: string
                    timesent: string
                    timecreated: number
                    isread: number
                }
            }

            namespace for_messagearea_get_profile {
                type reponse = {
                    userid: number
                    email: string
                    country: string
                    city: string
                    fullname: string
                    profileimageurl: string
                    profileimageurlsmall: string
                    showonlinestatus: number
                    isonline: number
                    isblocked: number
                    iscontact: number
                }
            }

            namespace for_messagearea_messages {
                type reponse = {
                    iscurrentuser: number
                    currentuserid: number
                    otheruserid: number
                    otheruserfullname: string
                    showonlinestatus: number
                    isonline: number
                    messages: {
                        id: number
                        useridfrom: number
                        useridto: number
                        text: string
                        displayblocktime: number
                        blocktime: string
                        position: string
                        timesent: string
                        timecreated: number
                        isread: number
                    }[]
                    isblocked: number
                }
            }

            namespace for_messagearea_search_messages {
                type reponse = {
                    contacts: {
                        userid: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        ismessaging: number
                        sentfromcurrentuser: number
                        lastmessage: string
                        messageid: number
                        showonlinestatus: number
                        isonline: number
                        isread: number
                        isblocked: number
                        unreadcount: number
                    }[]
                }
            }

            namespace for_messagearea_search_users {
                type reponse = {
                    contacts: {
                        userid: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        ismessaging: number
                        sentfromcurrentuser: number
                        lastmessage: string
                        messageid: number
                        showonlinestatus: number
                        isonline: number
                        isread: number
                        isblocked: number
                        unreadcount: number
                    }[]
                    courses: {
                        id: number
                        shortname: string
                        fullname: string
                    }[]
                    noncontacts: {
                        userid: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        ismessaging: number
                        sentfromcurrentuser: number
                        lastmessage: string
                        messageid: number
                        showonlinestatus: number
                        isonline: number
                        isread: number
                        isblocked: number
                        unreadcount: number
                    }[]
                }
            }

            namespace for_messagearea_search_users_in_course {
                type reponse = {
                    contacts: {
                        userid: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        ismessaging: number
                        sentfromcurrentuser: number
                        lastmessage: string
                        messageid: number
                        showonlinestatus: number
                        isonline: number
                        isread: number
                        isblocked: number
                        unreadcount: number
                    }[]
                }
            }
        }
        namespace get {
            namespace blocked_users {
                type reponse = {
                    users: {
                        id: number
                        fullname: string
                        profileimageurl: string
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace contacts {
                type reponse = {
                    online: {
                        id: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        unread: number
                    }[]
                    offline: {
                        id: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        unread: number
                    }[]
                    strangers: {
                        id: number
                        fullname: string
                        profileimageurl: string
                        profileimageurlsmall: string
                        unread: number
                    }[]
                }
            }

            namespace message_processor {
                type reponse = {
                    systemconfigured: number
                    userconfigured: number
                }
            }

            namespace messages {
                type reponse = {
                    messages: {
                        id: number
                        useridfrom: number
                        useridto: number
                        subject: string
                        text: string
                        fullmessage: string
                        fullmessageformat: number
                        fullmessagehtml: string
                        smallmessage: string
                        notification: number
                        contexturl: string
                        contexturlname: string
                        timecreated: number
                        timeread: number
                        usertofullname: string
                        userfromfullname: string
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace user_message_preferences {
                type reponse = {
                    preferences: {
                        userid: number
                        disableall: number
                        processors: {
                            displayname: string
                            name: string
                            hassettings: number
                            contextid: number
                            userconfigured: number
                        }[]
                        components: {
                            displayname: string
                            notifications: {
                                displayname: string
                                preferencekey: string
                                processors: {
                                    displayname: string
                                    name: string
                                    locked: number
                                    userconfigured: number
                                    loggedin: {
                                        name: string
                                        displayname: string
                                        checked: number
                                    }
                                    loggedoff: {
                                        name: string
                                        displayname: string
                                        checked: number
                                    }
                                }[]
                            }[]
                        }[]
                    }
                    blocknoncontacts: number
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace user_notification_preferences {
                type reponse = {
                    preferences: {
                        userid: number
                        disableall: number
                        processors: {
                            displayname: string
                            name: string
                            hassettings: number
                            contextid: number
                            userconfigured: number
                        }[]
                        components: {
                            displayname: string
                            notifications: {
                                displayname: string
                                preferencekey: string
                                processors: {
                                    displayname: string
                                    name: string
                                    locked: number
                                    userconfigured: number
                                    loggedin: {
                                        name: string
                                        displayname: string
                                        checked: number
                                    }
                                    loggedoff: {
                                        name: string
                                        displayname: string
                                        checked: number
                                    }
                                }[]
                            }[]
                        }[]
                    }
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
        namespace mark {
            namespace message_read {
                type reponse = {
                    messageid: number
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace notification_read {
                type reponse = {
                    notificationid: number
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
    }

    namespace question {
        namespace get {
            namespace random_question_summaries {
                type reponse = {
                    totalcount: number
                    questions: {
                        id: number
                        category: number
                        parent: number
                        name: string
                        qtype: string
                        icon: {
                            key: string
                            component: string
                            alttext: string
                        }
                    }[]
                }
            }
        }
    }

    namespace role {}

    namespace tag {
        namespace get {
            namespace tags {
                type reponse = {
                    tags: {
                        id: number
                        tagcollid: number
                        name: string
                        rawname: string
                        description: string
                        descriptionformat: number
                        flag: number
                        official: number
                        isstandard: number
                        viewurl: string
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
    }

    namespace user {
        namespace add {
            namespace user_device {
                type reponse = {
                    item: string
                    itemid: number
                    warningcode: string
                    message: string
                }[]
            }
        }
        namespace get {
            namespace course_user_profiles {
                type reponse = {
                    id: number
                    username: string
                    firstname: string
                    lastname: string
                    fullname: string
                    email: string
                    address: string
                    phone1: string
                    phone2: string
                    icq: string
                    skype: string
                    yahoo: string
                    aim: string
                    msn: string
                    department: string
                    institution: string
                    idnumber: string
                    interests: string
                    firstaccess: number
                    lastaccess: number
                    auth: string
                    suspended: number
                    confirmed: number
                    lang: string
                    calendartype: string
                    theme: string
                    timezone: string
                    mailformat: number
                    description: string
                    descriptionformat: number
                    city: string
                    url: string
                    country: string
                    profileimageurlsmall: string
                    profileimageurl: string
                    customfields: {
                        type: string
                        value: string
                        name: string
                        shortname: string
                    }[]
                    preferences: {
                        name: string
                        value: string
                    }[]
                    groups: {
                        id: number
                        name: string
                        description: string
                        descriptionformat: number
                    }[]
                    roles: {
                        roleid: number
                        name: string
                        shortname: string
                        sortorder: number
                    }[]
                    enrolledcourses: {
                        id: number
                        fullname: string
                        shortname: string
                    }[]
                }[]
            }

            namespace private_files_info {
                type reponse = {
                    filecount: number
                    foldercount: number
                    filesize: number
                    filesizewithoutreferences: number
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace user_preferences {
                type reponse = {
                    preferences: {
                        name: string
                        value: string
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace users {
                type reponse = {
                    users: {
                        id: number
                        username: string
                        firstname: string
                        lastname: string
                        fullname: string
                        email: string
                        address: string
                        phone1: string
                        phone2: string
                        icq: string
                        skype: string
                        yahoo: string
                        aim: string
                        msn: string
                        department: string
                        institution: string
                        idnumber: string
                        interests: string
                        firstaccess: number
                        lastaccess: number
                        auth: string
                        suspended: number
                        confirmed: number
                        lang: string
                        calendartype: string
                        theme: string
                        timezone: string
                        mailformat: number
                        description: string
                        descriptionformat: number
                        city: string
                        url: string
                        country: string
                        profileimageurlsmall: string
                        profileimageurl: string
                        customfields: {
                            type: string
                            value: string
                            name: string
                            shortname: string
                        }[]
                        preferences: {
                            name: string
                            value: string
                        }[]
                    }[]
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }

            namespace users_by_field {
                type reponse = {
                    id: number
                    username: string
                    firstname: string
                    lastname: string
                    fullname: string
                    email: string
                    address: string
                    phone1: string
                    phone2: string
                    icq: string
                    skype: string
                    yahoo: string
                    aim: string
                    msn: string
                    department: string
                    institution: string
                    idnumber: string
                    interests: string
                    firstaccess: number
                    lastaccess: number
                    auth: string
                    suspended: number
                    confirmed: number
                    lang: string
                    calendartype: string
                    theme: string
                    timezone: string
                    mailformat: number
                    description: string
                    descriptionformat: number
                    city: string
                    url: string
                    country: string
                    profileimageurlsmall: string
                    profileimageurl: string
                    customfields: {
                        type: string
                        value: string
                        name: string
                        shortname: string
                    }[]
                    preferences: {
                        name: string
                        value: string
                    }[]
                }[]
            }
        }
        namespace update {
            namespace picture {
                type reponse = {
                    success: number
                    profileimageurl: string
                    warnings: {
                        item: string
                        itemid: number
                        warningcode: string
                        message: string
                    }[]
                }
            }
        }
    }
}
