import { Button, createStyles, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LaunchIcon from '@material-ui/icons/Launch';
import SaveIcon from '@material-ui/icons/Save';
import * as React from "react";
import { Redirect } from "react-router";
import Autocomplete from "../common/Autocomplete";
import { Education } from "../common/Education";
import { Sex } from "../common/Sex";
import { IPatient } from "./Patient";

const styles = (theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing.unit,
        },
        buttonSmall: {
            align: 'right',
            justify: 'center',
            margin: theme.spacing.unit,
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: theme.spacing.unit,
        },
        leftIcon: {
            marginRight: theme.spacing.unit,
        },
        paper: {
            color: theme.palette.text.secondary,
            padding: theme.spacing.unit,
            textAlign: 'center',
        },
        rightIcon: {
            marginLeft: theme.spacing.unit,
        },
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
        },
        textField: {
            marginRight: theme.spacing.unit,
        },
        title: {
            margin: theme.spacing.unit * 2,
            verticalAlign: 'middle',
        },
    });

const pathologicalAutocomplete = [
    { label: 'Hipertension Arterial' },
    { label: 'Diabetes Mellitus' },
    { label: 'Arterioesclerosis' },
    { label: 'Enfermedad Autoinmune' },
    { label: 'Dislipidemia' },
    { label: 'Nefropatía' },
].map(suggestion => ({
    label: suggestion.label,
    value: suggestion.label,
}));

const familiarAutocomplete = [
    { label: 'Demencia' },
    { label: 'Enfermedad Mental' },
    { label: 'Hipertensión Arterial' },
    { label: 'Diabetes Mellitus' },
    { label: 'Arterioescleroris' },
    { label: 'Enfermedad Autoinmune' },
    { label: 'Dislipidemia' },
    { label: 'Nefropatía' },
].map(suggestion => ({
    label: suggestion.label,
    value: suggestion.label,
}));

interface IPatientViewState {
    isLoaded: boolean,
    isRedirect: boolean,
    redirectTo: string,
}

interface IPatientViewProps extends WithStyles<typeof styles>, IPatient {
    disabled: boolean,
    handleChange: (property: string, value: any) => void,
    save: () => void,
}

const PatientView = withStyles(styles)(
    class extends React.Component<IPatientViewProps, IPatientViewState> {
        constructor(props: IPatientViewProps) {
            super(props);

            this.state = {
                isLoaded: false,
                isRedirect: false,
                redirectTo: "",
            }
        }

        public render() {
            const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <Grid container={true} spacing={16} className={classes.container} justify={'center'}>
                        <Grid item={true} lg={8} md={10} sm={12} xs={12}>
                            <Typography variant="display1" className={classes.title}>Demographic
                                Data</Typography>
                            <Paper className={classes.paper}>
                                <form>
                                    <Grid container={true} spacing={16} justify={'space-around'}>
                                        <Grid item={true} lg={11} md={11} sm={12} xs={12}>
                                            <TextField
                                                required={true}
                                                className={classes.textField}
                                                id="name"
                                                disabled={this.props.disabled}
                                                value={this.props.name}
                                                onChange={this.handleEventChange('name')}
                                                label="Name"
                                                fullWidth={true}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <TextField
                                                required={true}
                                                className={classes.textField}
                                                id="identity"
                                                disabled={this.props.disabled}
                                                value={this.props.identity}
                                                onChange={this.handleEventChange('identity')}
                                                label="Identity"
                                                fullWidth={true}
                                                margin="normal"
                                                type="number"
                                                helperText="National ID"
                                            />
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <TextField
                                                required={true}
                                                id="date"
                                                label="Birthdate"
                                                type="date"
                                                className={classes.textField}
                                                fullWidth={true}
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                value={this.props.birthDate}
                                                onChange={this.handleEventChange('birthDate')}
                                            />
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <TextField
                                                required={true}
                                                className={classes.textField}
                                                id="sex"
                                                disabled={this.props.disabled}
                                                value={this.props.sex}
                                                onChange={this.handleEventChange('sex')}
                                                label="Sex"
                                                margin="normal"
                                                fullWidth={true}
                                                select={true}
                                            >
                                                <MenuItem value={Sex.Female} >Female</MenuItem>
                                                <MenuItem value={Sex.Male} >Male</MenuItem>
                                            </TextField>
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <TextField
                                                required={true}
                                                className={classes.textField}
                                                id="origin"
                                                disabled={this.props.disabled}
                                                value={this.props.origin}
                                                onChange={this.handleEventChange('origin')}
                                                label="Origin"
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <TextField
                                                required={true}
                                                className={classes.textField}
                                                id="procedence"
                                                disabled={this.props.disabled}
                                                value={this.props.procedence}
                                                onChange={this.handleEventChange('procedence')}
                                                label="Procedence"
                                                fullWidth={true}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <FormControl fullWidth={true}
                                                className={classes.textField} margin="normal">
                                                <InputLabel htmlFor="sex-simple">Education</InputLabel>
                                                <Select
                                                    style={{ textAlign: 'left' }}
                                                    value={this.props.education}
                                                    onChange={this.handleEventChange('education')}
                                                    inputProps={{
                                                        id: 'education-simple',
                                                        name: 'education',
                                                    }}
                                                >
                                                    <MenuItem value={Education.None}>None</MenuItem>
                                                    <MenuItem value={Education.Primary}>Primary</MenuItem>
                                                    <MenuItem value={Education.HighSchool} >High School</MenuItem>
                                                    <MenuItem value={Education.Bachelor} >Bachelor
                                                        Degree</MenuItem>
                                                    <MenuItem value={Education.Master}>Master Degree</MenuItem>
                                                    <MenuItem value={Education.Doctorate} >Doctorate</MenuItem>
                                                    <MenuItem value={Education.PostDoctorate} >Post
                                                        Doctorate</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <TextField
                                                required={true}
                                                className={classes.textField}
                                                id="race"
                                                disabled={this.props.disabled}
                                                value={this.props.race}
                                                onChange={this.handleEventChange('race')}
                                                label="Race"
                                                fullWidth={true}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <Autocomplete
                                                suggestions={[]}
                                                selection={this.props.medicines}
                                                placeholder="Medicines"
                                                label="Medicines"
                                                onChange={this.handleChange('medicines')}
                                            />
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <Autocomplete
                                                suggestions={pathologicalAutocomplete}
                                                selection={this.props.pathologicalPast}
                                                placeholder="Pathological Past"
                                                label="Pathological Past"
                                                onChange={this.handleChange('pathologicalPast')}
                                            />
                                        </Grid>
                                        <Grid item={true} lg={5} md={5} sm={12} xs={12}>
                                            <Autocomplete
                                                suggestions={familiarAutocomplete}
                                                selection={this.props.familiarPast}
                                                placeholder="Familiar Past"
                                                label="Familiar Past"
                                                onChange={this.handleChange('familiarPast')}
                                            />
                                        </Grid>
                                    </Grid>
                                    <br /><br /><br />
                                    <Grid item={true} lg={11} md={11} sm={12} xs={12}>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                            onClick={this.handleOpenOpticalEvaluation(0)}
                                        >
                                            <AddIcon className={classes.leftIcon} />
                                            New Optical Evaluation
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            onClick={this.props.save}
                                        >
                                            <SaveIcon className={classes.leftIcon} />
                                            Save
                                        </Button>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                        <Grid item={true} lg={8} md={10} sm={12} xs={12}>
                            <Typography variant="display1" className={classes.title}>
                                Optical Evaluations
                            </Typography>
                        </Grid>
                        <Grid item={true} lg={8} md={10} sm={12} xs={12}>
                            {this.state.isRedirect && <Redirect to={this.state.redirectTo} />}
                            {this.renderOpticalEvaluations()}
                        </Grid>
                    </Grid>
                </div>
            )
        }

        private renderOpticalEvaluations = () => {
            const opticalEvaluations: any[] = [];
            this.props.opticalEvaluations.forEach(opticalEvaluation => {
                opticalEvaluations.push(
                    this.opticalEvaluationButton(
                        opticalEvaluation.id, opticalEvaluation.creationDate, Math.random()))
            })
            return opticalEvaluations;
        }

        private opticalEvaluationButton = (id: number, date: string, key: number) => {
            const { classes } = this.props;
            return (
                <Grid key={key} item={true} lg={6} md={6} sm={12} xs={12}>
                    <Paper className={classes.paper}>
                        <Grid container={true} >
                            <Grid item={true} lg={6} md={6} sm={6} xs={12}>
                                <Typography
                                    variant="title" gutterBottom={true} className={classes.title}
                                >
                                    Date: {date.substring(0, 10)}
                                </Typography>
                            </Grid>
                            <Grid item={true} lg={6} md={6} sm={6} xs={12}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    className={classes.button}
                                    onClick={this.handleOpenOpticalEvaluation(id)}
                                >
                                    Open
                                    <LaunchIcon className={classes.rightIcon} />
                                </Button>
                                <Button
                                    className={classes.buttonSmall}
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                // onClick={(e) => this.props.handleCopyOpticalEvaluation(this.props.id)}
                                >
                                    Copy
                                    <FileCopyIcon className={classes.rightIcon} />
                            </Button>
                                <Button
                                    className={classes.buttonSmall}
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    disabled={this.props.disabled}
                                // onClick={(e) => this.props.handleDeleteOpticalEvaluation(this.props.id)}
                                >
                                    Delete
                                    <DeleteIcon className={classes.rightIcon} />
                            </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            );
        }

        private handleChange = (target: string) => (value: any) => {
            this.props.handleChange(target, value)
        }

        private handleEventChange = (target: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            this.props.handleChange(target, event.target.value);
        }

        private handleOpenOpticalEvaluation = (target: number) => (event: any) => {
            this.setState({
                isRedirect: true,
                redirectTo: `/patient/${this.props.id}/opticalEvaluation/${target}`
            })
        }
    }
);

export default PatientView;
