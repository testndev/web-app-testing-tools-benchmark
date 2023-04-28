csvHeader="runner;duration;logTime"

chronoCsvPath="../../results/chrono.csv"
stdoutLogsPath="../../results/testExecStdout.log"

touch $chronoCsvPath

if [ ! -s $chronoCsvPath ]; then
    echo $csvHeader > $chronoCsvPath
fi
if [ "$(tail -c 1 $chronoCsvPath)" <> '\n' ]; then
    echo "" >> $chronoCsvPath
fi


function preRunLog {  
    echo "[$1][$(getDateIso)] ▶ start running all tests" | tee -a $stdoutLogsPath
}

function getDateIso {  
   echo $(date --iso-8601=seconds)
}

function getChrono {  
   echo $(date +%s%N)
}

function postRunLog {
    runner=$1
    start=$2
    end=$3
    elapsed_time="$(($(($end-$start))/1000000))"
    elapsed_time_log_message="[$runner][$(getDateIso)] ◼ Elapsed time: $elapsed_time ms"
    echo $elapsed_time_log_message | tee -a $stdoutLogsPath
    echo "\"$runner\";$elapsed_time;\"$(getDateIso)\"" >> $chronoCsvPath
}