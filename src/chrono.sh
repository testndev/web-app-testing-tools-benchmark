csvHeader="runner;duration;logTime"

chronoCsvPath="../../results/chrono.csv"

touch $chronoCsvPath
if [ ! -s $chronoCsvPath ]; then
    echo $csvHeader > $chronoCsvPath
fi

function preRunLog {  
    echo "##[$1] ▶ start running all tests"
}

function getChrono {  
   echo $(date +%s%N)
}

function postRunLog {
    runner=$1
    start=$2
    end=$3
    elapsed_time="$(($(($end-$start))/1000000))"
    elapsed_time_log_message="##[$runner] ◼ Elapsed time: $elapsed_time ms"
    echo $elapsed_time_log_message
    echo "\"$runner\";$elapsed_time;\"$(date --iso-8601=seconds)\"" >> $chronoCsvPath
}