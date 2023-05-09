csvHeader="runner;duration;logTime"

chronoCsvPath="../../results/chrono.csv"
stdoutLogsPath="../../results/testExecStdout.log"

touch $chronoCsvPath

if [ ! -s $chronoCsvPath ]; then
    echo "$csvHeader" > $chronoCsvPath
fi

if [ "$(tail -c 1 $chronoCsvPath)" <> '\n' ]; then
    echo "" >> $chronoCsvPath
fi

function getDateIso {  
   echo $(date --iso-8601=seconds)
}

function getChrono {  
   echo $(date +%s%N)
}

function preRunLog {  
    echo "[$1][$(getDateIso)] ▶ start running all tests" | tee -a $stdoutLogsPath
}

function postRunLog {
    runner=$1
    startTime=$2
    endTime=$3

    if [ -z "$runner" ]; then
        echo "runner is not specified"
    else
        echo "runner is $runner"
    fi
    
    if [ -z "$startTime" ]; then
        echo "startTime is not specified"
    else
        echo "startTime is $startTime"
    fi

    if [ -z "$endTime" ]; then
        echo "endTime is not specified"
    else
        echo "endTime is $endTime"
    fi

    elapsed_time="$(($(($endTime-$startTime))/1000000))"
    elapsed_time_log_message="[$runner][$(getDateIso)] ◼ Elapsed time: $elapsed_time ms"
    echo $elapsed_time_log_message | tee -a $stdoutLogsPath
    echo "\"$runner\";$elapsed_time;\"$(getDateIso)\"" >> $chronoCsvPath
}